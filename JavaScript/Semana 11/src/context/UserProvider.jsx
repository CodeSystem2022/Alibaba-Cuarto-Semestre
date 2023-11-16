import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes para resplver problema del children en UserProvider.jsx
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false); // con este estado vamos a saber si el usuario esta logueado o no

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      // este metodo esta pendiente si el usuario esta logueado o no
      //console.log(user);
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setUser({ email, photoURL, displayName, uid }); // con esto si existe un usuario le pasamos esos datos
      } else {
        setUser(null)
      }
    });
    return () => unsuscribe(); // Cancela la suscripción cuando el componente se desmonta
  }, []); // nos va a traer al usuario que esta activo en el backend, Se ejecuta solo una vez al inicio para obtener el usuario actual

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password); // con este metodo registramos al usuario

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password); // con este metodo logueamos al usuario

  const signOutUser = () => signOut(auth); // con este metodo cerramos sesion al usuario

  return (
    <UserContext.Provider
      value={{ user, setUser, registerUser, loginUser, signOutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Agrega la validación de props
UserProvider.propTypes = {
  children: PropTypes.node.isRequired // Valida que se pase 'children' como prop
};

export default UserProvider;

/* Este comentario explica que se ha agregado una validación de propiedades (propTypes) 
para garantizar que children sea una propiedad requerida y de tipo node.
También puedes incluir una breve nota que sugiera la razón detrás de esta validación, 
como "Esto asegura que los componentes hijos se pasen adecuadamente al proveedor de usuario" */

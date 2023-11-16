import { useContext } from "react";
import { NavLink, Link } from "react-router-dom"; //NavLink refesca Link no
import { UserContext } from "../context/UserProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);

  const handleClickLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  const classButtonBlue = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  const classButonRed = "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="src\assets\img\UTN San Rafael.png"
            className="h-10 mr-3"
            alt="UTN FRSR"
          />
          <span className="self-center text-lg py-5 font-semibold whitespace-nowrap dark:text-white">
       
            Documentación de Ingreso UTN FRSR
          </span>
        </Link>
        <div className="flex:order-2">
          {user ? (
            <>
              <NavLink to="/" 
              className={classButtonBlue} //refactorizamos los botones para que sean mas cortos
          >Acceder</NavLink>

              <button onClick={handleClickLogout} 
              className={classButonRed} //refactorizamos los botones para que sean mas cortos
          >Cerrar Sesion</button>

            </>
          ) : (
            <>
              <NavLink to="/login" 
              className={classButtonBlue} //refactorizamos los botones para que sean mas cortos
          >Iniciar Sesión</NavLink>

              <NavLink to="/register" 
              className={classButtonBlue} //refactorizamos los botones para que sean mas cortos
          >Registrarse</NavLink>

            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

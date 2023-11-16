import { useState } from "react"; //useEffect,
import { db, auth } from "../firebase";
import {
  getDocs,
  getDoc,
  collection,
  where,
  query,
  doc,
  setDoc,
  deleteDoc,
  updateDoc
} from "firebase/firestore/lite";
import { nanoid } from "nanoid";

export const useFirestore = () => {
  const [data, setData] = useState([]); // Define el estado "data" para almacenar los datos recuperados
  const [error, setError] = useState(); // Define el estado "error" para manejar errores
  const [loading, setLoading] = useState({}); // Define el estado "loading" para rastrear si la consulta está en curso.

  const getData = async () => {
    //console.log("auth.currentUser");
    try {
      setLoading(prev => ({ ...prev, getData: true }));
      const dataRef = collection(db, "urls"); // Obtiene una referencia a la colección "urls" en Firestore.
      const q = query(dataRef, where("uid", "==", auth.currentUser.uid)); // Crea una consulta con una condición de igualdad en el campo "uid".
      const querySnapshot = await getDocs(q); // Ejecuta la consulta y obtiene un conjunto de resultados.
      const dataDB = querySnapshot.docs.map(doc => doc.data()); // Mapea los documentos a un formato de datos que incluye el ID del documento.
      setData(dataDB); // Actualiza el estado "data" con los datos recuperados.
    } catch (error) {
      console.log(error);
      setError(error.message); // guardamos el error en el estado para traerlo // Si se produce un error, lo maneja y lo almacena en el estado "error".
    } finally {
      setLoading(prev => ({ ...prev, getData: false }));
    }
  };

  const addData = async url => {
    try {
      setLoading(prev => ({ ...prev, addData: true }));
      const newDoc = {
        enabled: true,
        nanoid: nanoid(6),
        origin: url,
        uid: auth.currentUser.uid
      };

      const docRef = doc(db, "urls", newDoc.nanoid);
      await setDoc(docRef, newDoc);
      setData([...data, newDoc]);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(prev => ({ ...prev, addData: false }));
    }
  };

  const deleteData = async nanoid => {
    try {
      setLoading(prev => ({ ...prev, [nanoid]: true }));
      const docRef = doc(db, "urls", nanoid);
      await deleteDoc(docRef);
      setData(data.filter(item => item.nanoid !== nanoid));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(prev => ({ ...prev, [nanoid]: false }));
    }
  };

  const updateData = async (nanoid, newOrigin) => {
    try {
      setLoading(prev => ({ ...prev, [updateData]: true }));
      const docRef = doc(db, "urls", nanoid);
      await updateDoc(docRef, { origin: newOrigin });
      setData(data.map(item => item.nanoid === nanoid ? ({ ...item, origin: newOrigin}) : item));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(prev => ({ ...prev, [updateData]: false }));
    }
  };

  const searchData = async (nanoid) => {
    try {
        const docRef = doc(db, "urls", nanoid);
        const docSnap = await getDoc(docRef);

        return docSnap;
    } catch (error) {
        console.log(error);
        setError(error.message);
    }
};

  return {
    data, // Devuelve los datos recuperados.
    error, // Devuelve cualquier error que ocurra durante la consulta.
    loading, // Devuelve un indicador de carga para saber si la consulta está en curso.
    getData, // Devuelve la función que ejecuta la consulta.
    addData,
    deleteData,
    updateData,
    searchData
  }; // en este hook retornamos un objeto
};

// Importar componentes y hooks necesarios
// import ExampleRef from "../components/ExampleRef"; // Comentario: Esta importación está comentada y no se está utilizando en este componente.

import { useEffect, useState } from "react";
import Title from "../components/Title"; // Título de la página
import { useFirestore } from "../hooks/useFirestore"; // Hook personalizado para obtener datos de Firestore
import Button from "../components/Button";
import { formValidate } from "../utils/formValidate";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import { erroresFirebase } from "../utils/erroresFirebase";
//import { nanoid } from "nanoid";

const Home = () => {
  const [copy, setCopy] = useState({propiedadX: true}); // Estado local para manejar el estado de carga
  const { required, patternURL } = formValidate;
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setError,
    setValue,
  } = useForm();

  // Utilizar el hook "useFirestore" para obtener datos de Firestore
  const { data, error, loading, getData, addData, deleteData, updateData } =
    useFirestore();
  const [newOriginID, setNewOriginID] = useState();

  useEffect(() => {
    console.log("getData");
    getData(); // Utiliza un efecto para realizar la consulta una vez al cargar el componente
  }, []); // Agrega "geData" como una dependencia en el array, para corregir el error de dependencia.

  // Si se está cargando, muestra un mensaje de carga
  if (loading.getData) return <p>Loading data getData...</p>;

  // Si hay un error, muestra el mensaje de error
  if (error) return <p>{error}</p>;

  const onSubmit = async ({ url }) => {
    try {
      if (newOriginID) {
        await updateData(newOriginID, url);
        setNewOriginID("");
      } else {
        await addData(url);
      }
      resetField("url");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    }
  };

  const handleClickDelete = async (nanoid) => {
    console.log("deleteData");
    await deleteData(nanoid);
  };

  const handleClickEdit = async (item) => {
    setValue("url", item.origin);
    setNewOriginID(item.nanoid);
  };

  const pathURL= window.location.href;

  const handleClickCopy = async (nanoid) => {
    await navigator.clipboard.writeText(window.location.href + nanoid)
    console.log("Copiado");
    setCopy({[nanoid]: true});
  }

  // Si hay datos, muestra la lista de elementos recuperados
  return (
    <>
      <Title text="Administrador de URLS" /> {/* Título de la página */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Ingresa tu URL"
          type="text"
          placeholder="www.UTN-FRSR.com.ar"
          {...register("url", {
            required, // Campo requerido
            pattern: patternURL // Debe coincidir con un patrón de correo electrónico
          })}
          error={errors.url} // Error específico para el campo de correo
        >
          <FormError error={errors.url}/>
        </FormInput>
        {newOriginID ? (
          <Button
            type="submit"
            text="Editar URL"
            color="yellow"
            loading={loading.updateData}
          />
        ) : (
          <Button
            type="submit"
            text="Agregar URL"
            color="blue"
            loading={loading.addData}
          />
        )}
      </form>
      {data.map((item) => (
        <div key={item.nanoid}
        className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pathURL}
            {item.nanoid}
          </h5> {/* Muestra el campo "nanoid" del elemento */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.origin}</p> {/* Muestra el campo "origin" del elemento */}
          <div className="flex space-x-2">
            <Button
              type="button"
              text="Eliminar"
              color="red"
              loading={loading[item.nanoid]}
              onClick={() => handleClickDelete(item.nanoid)}
            />
            <Button
              type="button"
              text="Editar"
              color="yellow"
              onClick={() => handleClickEdit(item)}
            />
            <Button
              type="button"
              text={copy[item.nanoid] ? "Copiado" : "Copiar"}
              color="blue"
              onClick={() => handleClickCopy(item.nanoid)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;

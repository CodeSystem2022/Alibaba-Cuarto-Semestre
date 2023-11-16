// Importación de módulos y componentes necesarios
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Login = () => {
  // Obtener la función "loginUser" del contexto "UserContext"
  const { loginUser } = useContext(UserContext);

  // Estado local para manejar el estado de carga
  const [loading, setLoading] = useState(false);

  // Obtener la función de navegación
  const navegate = useNavigate();

  // Extraer reglas de validación del formulario del módulo "formValidate"
  const { required, patternEmail, minLength, validateTrim } = formValidate;

  // Uso del hook "useForm" para gestionar el formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true); // Establecer el estado de carga a "true"
      await loginUser(email, password); // Intentar iniciar sesión con el correo y la contraseña
      navegate("/Home"); // Redirigir al usuario a la página principal después de iniciar sesión
    } catch (error) {
      console.log(error.code); // Registrar el código de error en la consola
      const { code, message } = erroresFirebase(error.code); // Obtener un mensaje de error correspondiente al código de Firebase
      setError(code, { message }); // Crear un error en el formulario (code es el nombre del error y message es el mensaje del error)
    } finally {
      setLoading(false); // Establecer el estado de carga nuevamente a "false" después de la operación
    }
  };

  return (
    <>
      <Title text="Inicio de sesión" />
      {/* Título y manejo de errores del formulario */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Formulario con campos de entrada y manejo de envío */}

        <FormInput
          label="Ingresa tu correo"
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required, // Campo requerido
            pattern: patternEmail // Debe coincidir con un patrón de correo electrónico
          })}
          error={errors.email} // Error específico para el campo de correo
        >
          <FormError error={errors.email} /> {/* Mostrar errores del campo de correo */}
        </FormInput>

        {/* Campo de entrada de correo electrónico y manejo de errores */}

        <FormInput
          label="Ingresa tu contraseña"
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength, // Debe tener al menos una longitud mínima
            validate: validateTrim // Debe estar libre de espacios en blanco
          })}
          error={errors.password} // Error específico para el campo de contraseña
        >
          <FormError error={errors.password} /> {/* Mostrar errores del campo de contraseña */}
        </FormInput>

        {/* Botón de inicio de sesión o indicador de carga según el estado "loading" */}
        <Button type="submit" text="Iniciar Sesión" color="blue" loading={loading} />
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Volver a la página de  inico
        <Link to="/" className="text-blue-700 hover:text-blue-900">
          Inicio
        </Link>
      </p>
    </>
  );
};

export default Login;

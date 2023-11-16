// Dependencias
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // react-hook-form es una libreria que nos ayuda a validar los formularios
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

//componenetes
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";
//import ButtonLoading from "../components/ButtonLoading";

const Register = () => { // con esto se crea el formulario de registro
  //const [email, setEmail] = useState();        estas constantes ya no se van a usar
  //const [password, setPassword] = useState();
  const navegate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
        formValidate(); // con esto se crea la validacion del formulario

  const {
    register, // con esto se registra los campos del formulario
    handleSubmit, // con esto se envia el formulario (se procesa)
    formState: { errors }, // con esto se obtiene los errores del formulario
    getValues, // con esto se obtiene los valores del formulario
    setError, // con esto se crea un error en el formulario
  } = useForm(// con esto se crea el formulario{
  //  defaultValues: { // con esto se crean los valores por defecto del formulario
  //    email: "ejemplo@mail.com",
  //    password: "123456",
  //    repassword: "123456"
  //  } 
//}
);

  const onSubmit = async ({ email, password }) => {  // con esto se envia los datos del formulario ( desetructuramos los datos del formulario, ya no uso data.email y data.password)
  //  console.log(email, password);
    try {
      setLoading(true);
      await registerUser(email, password); // con esto se registra el usuario en firebase (se llama a la funcion registerUser del context) ya no uso setEmail y setPassword y no necesito el data. xq lo desestructure arriba
    //  console.log("Usuario creado");
      navegate("/Home"); // con esto redireccionamos al usuario a la pagina de Home que seria la ruta que estamos protegiendo
    } catch (error) {
        console.log(error.code); // con esto se muestra el error en consola (error.code es el codigo del error del backend) al agregar es seterror no es necesario dejar esto
        const { code, message } = erroresFirebase(error.code); 
            setError(code, { message }); // con esto se crea un error en el formulario (code es el nombre del error y message es el mensaje del error)
    } finally{
        setLoading(false);
    }
  };

  return (
    <>
       <Title text="Registro" />
      {/* <FormError error={errors.firebase} />  */} 
      <form onSubmit={handleSubmit(onSubmit)}> {/* hadndleSubmit recibe la funcion onSumbmit y con esto se envia los datos del formulario */}
        <FormInput
          type="email"
          placeholder="Ingrese el email"
          {...register("email", { // con esto se creamos el estado que va recibir el input (registra el campo de email)
            required, // con esto se valida que el campo sea requerido
            pattern: patternEmail, // con esto se valida que el campo sea un email
          })} // se agrega el ...register para tener la relacion de los datos del usuario con la data del formulario
          label="Ingresa tu correo" // con esto se agrega el label al input
          error={errors.email ? true : false} // con esto se muestra el error del campo email
        >
        <FormError error={errors.email} /> {/* con esto se muestra el error del campo email*/}
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Passsword"
          {...register("password", { // con esto se creamos el estado que va recibir el input (registra el campo de password)
          //  setValueAs: (v) => v.trim(), //esto es para que no se guarden espacios en blanco
            minLength, // con esto se valida que el campo tenga minimo 6 caracteres
            validate: validateTrim, // con esto se valida que el campo no tenga espacios en blanco
          })}
        label="Ingresa tu contraseña" // con esto se agrega el label al input
        error={errors.password ? true : false}
        >
        <FormError error={errors.repassword} /> {/* con esto se muestra el error del campo password*/}
        </FormInput>

        <FormInput
          type="password"
          placeholder="Reingresar el Passsword"
          {...register("repassword", { // con esto se creamos el estado que va recibir el input (registra el campo de repassword )
          //  setValueAs: (v) => v.trim(),
            validate: validateEquals(getValues("password")), // con esto se valida que el campo sea igual al campo password
            /*
            {
              equals: (v) => //la propiedad equals es nuestra propia validacion
                v === getValues("password") || "Las contraseñas no coinciden"  // getValues es para obtener el valor del campo password (le paso la propiedad password)
              // message: "Las contraseñas no coinciden"
            }*/
          })} //esto es para validar que las contraseñas sean iguales
          label="Repite tu contraseña" // con esto se agrega el label al input
          error={errors.repassword ? true : false}
        >
        <FormError error={errors.repassword} /> {/* con esto se muestra el error del campo repassword*/}  
       </FormInput>
       <Button type="submit" text="Registrarse" color="blue" loading={loading} />
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

export default Register;

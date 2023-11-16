// erroresFirebase.js toma un código de error de Firebase como entrada y devuelve un objeto con un código 
//y un mensaje de error específicos de la aplicación.

// Definición de la función erroresFirebase que toma un código de error como entrada
export const erroresFirebase = (code) => {
    // Utiliza un switch para determinar qué tipo de error de Firebase se ha producido
    switch (code) {
        case "auth/email-already-in-use":
            // Si el código es "auth/email-already-in-use", devuelve un objeto con un código y mensaje específicos
            return {
                code: "email",
                message: "Usuario ya registrado",
            };
        case "auth/invalid-email":
            // Si el código es "auth/invalid-email", devuelve un objeto con un código y mensaje específicos
            return {
                code: "email",
                message: "Formato email no válido",
            };
        case "auth/user-not-found":
            // Si el código es "auth/user-not-found", devuelve un objeto con un código y mensaje específicos
            return {
                code: "email",
                message: "Usuario no registrado",
            };
        case "auth/wrong-password":
            // Si el código es "auth/wrong-password", devuelve un objeto con un código y mensaje específicos
            return {
                code: "password",
                message: "Contraseña incorrecta",
            };
        default:
            // Si el código no coincide con ninguno de los casos anteriores, devuelve un objeto con un código y mensaje genéricos
            return {
                code: "email",
                message: "Ocurrió un error en el servidor",
            };
    }
};

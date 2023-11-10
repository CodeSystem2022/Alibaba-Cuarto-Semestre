import {z} from "zod";

 export const signupSchema = z.object({
    name: z.string({
        required_error: "El nombre es requerido.",
        invalid_type_error: "El nombre debe ser string.",
    }).min(1, {
        message: "El nombre debe tener al menos 1 caracter."
    }).max(255, {
        message: "El nombre debe tener como maximo 255 caracteres."
    }),
    email: z.string({
        required_error: "El email es requerido.",
        invalid_type_error: "El email debe ser string.",
    }).email( {
        message: "El email debe ser un email valido."
    }),
    password: z.string({
        required_error: "La contraseña es requerida.",
        invalid_type_error: "La contraseña debe ser string.",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracter."
    }).max(255, {
        message: "La contraseña debe tener como maximo 255 caracteres."
    }),
});

export const signin = z.object({
    name: z.string({
        required_error: "El nombre es requerido.",
        invalid_type_error: "El nombre debe ser string.",
    }).min(1, {
        message: "El nombre debe tener al menos 1 caracter."
    }).max(255, {
        message: "El nombre debe tener como maximo 255 caracteres."
    }),
    email: z.string({
        required_error: "El email es requerido.",
        invalid_type_error: "El email debe ser string.",
    }).email( {
        message: "El email debe ser un email valido."
    }),
    password: z.string({
        required_error: "La contraseña es requerida.",
        invalid_type_error: "La contraseña debe ser string.",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracter."
    }).max(255, {
        message: "La contraseña debe tener como maximo 255 caracteres."
    }),
});
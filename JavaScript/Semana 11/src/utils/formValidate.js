// es js xq devuelve funcionalidades js y no jsx
export const formValidate = () => { // (getValues) => { // si necesitamos acceder a los valores del formulario
    return {
        required: {
            value: true,
            message: "Campo obligatorio",
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato de email incorrecto",
        },
        patternURL: {
            value: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
            message: "Formato de url incorrecto",
        },
        minLength: {
            value: 6,
            message: "Mínimo 6 carácteres",
        },
        validateTrim: {
            trim: (v) => {
                if (!v.trim()) {
                    return "Debe escribir algo";
                }
                return true;
            },
        },
        validateEquals(value) {
            return {
                equals: (v) =>
                    v === value ||
                    "No coinciden las contraseñas",
            };
        },
    };
};
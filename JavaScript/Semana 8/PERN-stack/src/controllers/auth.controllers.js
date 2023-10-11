import { Pool } from "../db.js";

export const singin =  (req, res,) => res.send("Ingresando")

export const singup = async (req, res,) => {
    const { name, email, password } = req.body;
    console.log(name,email,password);
    res.send("Registrando");
    
    try {
    const result= await Pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
   
    console.log(result);
    return res.json(result.rows[0]); 
   
    
    } catch (error) {
        if(error.code === "23505"){
            return res.status(409).json({
                message: "El correo ya esta registrado"
            })
        }
    
    }

 
};

export const singout =  (req, res,) => res.send("Cerrando sesion")

export const profile = (req, res,) => res.send("Perfil de usuario")

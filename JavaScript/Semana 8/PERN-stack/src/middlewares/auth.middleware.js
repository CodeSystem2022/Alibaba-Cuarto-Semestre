import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
    const token = req.cookies.token; 

    if (token) {
        return res.status(401).json({
            message: 'No estás registrado'
        })
    }

    jwt.verify(token, "xyz123", (err, decoded) =>{
        if(err){
            return res.status(401).json({
                message: 'no estás autorizado'
            });
        }
        req.usuarioId = decoded.id;
        next();
    });
    
};
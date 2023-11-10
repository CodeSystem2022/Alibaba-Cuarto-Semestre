import jwt from "jsonwebtoken";

 export const isAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return req.status(401).json({
            message: "No estas autorizado"
        });
    }
    jwt.verify(token, "xyz123", (err, decoded) =>{
        if (err) {
            return res.status(401).json({
                message: "No estas autorizado"
            });
            
        }
        req.usuarioId = decoded.id;
        next();
    });
};


import express from "express";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extend : false}));


app.get("/", (req, res) => res.json({message: "Bienvenidos a mi proyecto" }));

app.use((err, req, res, next) => {
    res.status(500).json({
        status:"error",
        message: err.message
     })
});


export default app;



import { Router } from "express";

const router = Router();

router.post("/singin", (req, res) => res.send("Ingresndo"));

router.post("/singup", (req, res) => res.send("registrando"));

router.post("/singout", (req, res) => res.send("Cerrando sesion"));

router.get("/profile", (req, res) => res.send("perfil del usuario"));

export default router;
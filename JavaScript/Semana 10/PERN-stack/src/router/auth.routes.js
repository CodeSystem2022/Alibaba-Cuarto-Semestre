import Router from "express-promise-router";
import { profile, signin, signout, signup } from "../controllers/auth.controllers.js";
import {isAuth} from "../middlewares/auth.middlewares.js";

const router = Router();

// Utiliza el método POST para rutas que envían datos al servidor
router.post("/signin", signin);
router.post("/signup", signup);
router.post("/signout", signout);

// Utiliza el método GET para rutas que obtienen datos del servidor
router.get("/profile", isAuth, profile);

export default router;

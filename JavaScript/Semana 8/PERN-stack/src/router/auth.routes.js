import Router from "express-promise-router";
import { profile, singin, singout, singup } from "../controllers/auth.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/singin", singin);

router.post("/singup", singup);

router.post("/singout", singout);

router.get("/profile",isAuth, profile);

export default router;
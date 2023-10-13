import Router from "express-promise-router";

import { profile, singin, singout, singup } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/singin", singin);

router.post("/singup", singup);

router.post("/singout", singout);

router.get("/profile", profile);

export default router;
import Router from "express-promise-router";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controllers.js";
import { isAuth } from "../middlewares/auth.middlewares.js";

const router = Router();

router.get('/tareas', isAuth, listarTareas);

router.get('/tareas/:id', isAuth, listarTarea);

router.post('/tareas', isAuth, crearTarea);

router.put('/tareas/:id', isAuth, actualizarTarea); // Debes usar "/tareas/:id" para capturar el ID

router.delete('/tareas/:id',isAuth, eliminarTarea); // Debes usar "/tareas/:id" para capturar el ID

export default router;

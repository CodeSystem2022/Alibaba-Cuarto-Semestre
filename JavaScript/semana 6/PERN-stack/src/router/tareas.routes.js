import { Router } from "express";
import { listarTareas } from "../controllers/tareas.controllers.js";
import { listarTarea } from "../controllers/tareas.controllers.js";
import { crearTarea } from "../controllers/tareas.controllers.js";
import { actualizarTarea } from "../controllers/tareas.controllers.js";
import { elimiarTarea } from "../controllers/tareas.controllers.js";

const router = Router();

router.get('/tareas', listarTareas);

router.get('/tareas/:id', listarTarea);

router.post('/tareas', crearTarea);

router.put('/tareas/id', actualizarTarea);

router.delete('/tareas/id', elimiarTarea);

export default router;
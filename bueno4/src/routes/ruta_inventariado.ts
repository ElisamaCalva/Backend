import {crear, obtener1objeto} from '../controllers/Controller_inventariado';

import { Router } from 'express';
import rutas_trabajadores from './ruta_trabajadores';
export const rutas_inventariado = Router()


rutas_inventariado.post('/crear', crear)
rutas_inventariado.get("/obtenerOne/:id_Recurso", obtener1objeto)

export default rutas_inventariado






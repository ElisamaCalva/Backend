import {actualizarInventario, crear, eliminarallInventario, eliminarUnObjeto, obtener1objeto, obtenerAllInventario,} from '../controllers/Controller_inventariado';

import { Router } from 'express';
//import rutas_trabajadores from './ruta_trabajadores';
export const rutas_inventariado = Router()


rutas_inventariado.post('/crear', crear)
rutas_inventariado.get('/obtener', obtenerAllInventario);
rutas_inventariado.get("/obtenerOne/:id_Recurso", obtener1objeto)
rutas_inventariado.put('/actualizar/:id_Recurso', actualizarInventario);
rutas_inventariado.delete('/eliminar/:id_Trabajador', eliminarUnObjeto);
rutas_inventariado.delete('/eliminados', eliminarallInventario);


export default rutas_inventariado






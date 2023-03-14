import {crear, obtenerAllTrabajadores, obtener1Trabajador, actualizarTrabajador, eliminarTrabajador, eliminarallTrabajador} from '../controllers/Controller_trabajadores';
import { Router } from 'express';

export const rutas_trabajadores = Router()

rutas_trabajadores.post('/crear', crear)
rutas_trabajadores.get('/obtener', obtenerAllTrabajadores);
rutas_trabajadores.get("/obtenerOne/:id_Trabajador", obtener1Trabajador);

rutas_trabajadores.put('/actualizar/:id_Trabajador', actualizarTrabajador);

rutas_trabajadores.delete('/eliminar/:id_Trabajador', eliminarTrabajador);

rutas_trabajadores.delete('/eliminados', eliminarallTrabajador);

// RUTA.get('/conectar',  Trabajadores)
// RUTA.delete('/conectar',  Trabajadores)
// RUTA.put('/conectar',  Trabajadores)

export default rutas_trabajadores
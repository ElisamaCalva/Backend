"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutas_trabajadores = void 0;
const Controller_trabajadores_1 = require("../controllers/Controller_trabajadores");
const express_1 = require("express");
exports.rutas_trabajadores = (0, express_1.Router)();
exports.rutas_trabajadores.post('/crear', Controller_trabajadores_1.crear);
exports.rutas_trabajadores.get('/obtener', Controller_trabajadores_1.obtenerAllTrabajadores);
exports.rutas_trabajadores.get("/obtenerOne/:id_Trabajador", Controller_trabajadores_1.obtener1Trabajador);
exports.rutas_trabajadores.put('/actualizar/:id_Trabajador', Controller_trabajadores_1.actualizarTrabajador);
exports.rutas_trabajadores.delete('/eliminar/:id_Trabajador', Controller_trabajadores_1.eliminarTrabajador);
exports.rutas_trabajadores.delete('/eliminados', Controller_trabajadores_1.eliminarallTrabajador);
// RUTA.get('/conectar',  Trabajadores)
// RUTA.delete('/conectar',  Trabajadores)
// RUTA.put('/conectar',  Trabajadores)
exports.default = exports.rutas_trabajadores;

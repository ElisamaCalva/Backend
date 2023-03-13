"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutas_inventariado = void 0;
const Controller_inventariado_1 = require("../controllers/Controller_inventariado");
const express_1 = require("express");
exports.rutas_inventariado = (0, express_1.Router)();
exports.rutas_inventariado.post('/crear', Controller_inventariado_1.crear);
exports.rutas_inventariado.get("/obtenerOne/:id_Recurso", Controller_inventariado_1.obtener1objeto);
exports.default = exports.rutas_inventariado;

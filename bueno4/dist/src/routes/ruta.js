"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUTA = exports.trabajadores = void 0;
const controlador_1 = require("../controllers/controlador");
const express_1 = __importDefault(require("express"));
/*import {Inventariado} from '../controllers/Controller_inventariado';

export const inventariados = Inventariado()

import { Resguardos } from "../controllers/Controller_resguardos";

export const resguardos = Resguardos()

import { Roles } from "../controllers/Controller_roles";

export const roles = Roles()*/
const Controller_trabajadores_1 = require("../controllers/Controller_trabajadores");
exports.trabajadores = (0, Controller_trabajadores_1.Controller_trabajadores)();
/*import {Ubicacionarea} from "../controllers/Controller_ubicacionarea";

export const ubicacionarea = Ubicacionarea()

import { Usuarios } from "../controllers/Controller_usuarios";

export const usuarios = Usuarios()*/
exports.RUTA = (0, express_1.default)();
/*RUTA.post('/conectar', Usuarios)
RUTA.post('/conectar', Ubicacionarea)*/
exports.RUTA.post('/crear', Controller_trabajadores_1.Controller_trabajadores);
/*RUTA.post('/conectar', Roles)
RUTA.post('/conectar', Resguardos)
RUTA.post('/conectar', Inventariado)*/
exports.RUTA.post('/conectar', controlador_1.CONECTARDB);
exports.RUTA.post('/registrar', controlador_1.REGISTRARUSUARIO);
exports.RUTA.post('/saludar', controlador_1.SALUDAR);

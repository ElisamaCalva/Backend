import { CONECTARDB, REGISTRARUSUARIO, SALUDAR} from "../controllers/controlador";

import  Router, { response }  from 'express';

/*import {Inventariado} from '../controllers/Controller_inventariado';

export const inventariados = Inventariado()

import { Resguardos } from "../controllers/Controller_resguardos";

export const resguardos = Resguardos()

import { Roles } from "../controllers/Controller_roles";

export const roles = Roles()*/

import { Controller_trabajadores } from "../controllers/Controller_trabajadores";

export const trabajadores = Controller_trabajadores()

/*import {Ubicacionarea} from "../controllers/Controller_ubicacionarea";

export const ubicacionarea = Ubicacionarea()

import { Usuarios } from "../controllers/Controller_usuarios";

export const usuarios = Usuarios()*/


export const RUTA = Router()

/*RUTA.post('/conectar', Usuarios)
RUTA.post('/conectar', Ubicacionarea)*/
RUTA.post('/crear', Controller_trabajadores)
/*RUTA.post('/conectar', Roles)
RUTA.post('/conectar', Resguardos)
RUTA.post('/conectar', Inventariado)*/
RUTA.post('/conectar', CONECTARDB)
RUTA.post('/registrar',REGISTRARUSUARIO)
RUTA.post('/saludar', SALUDAR)
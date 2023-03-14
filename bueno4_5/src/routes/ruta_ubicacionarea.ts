import { crear } from '../controllers/Controller_ubicacionarea';
import { Router } from 'express';

export const RUTA = Router()
rutas_ubicacionarea.post('/crear', crear)

/*
RUTA.post('/conectar', Ubicacionarea)
RUTA.get('/conectar',  Ubicacionarea)
RUTA.delete('/conectar',  Ubicacionarea)
RUTA.put('/conectar',  Ubicacionarea)*/

export default rutas_ubicacionarea
import express, { Application, Express, Request, Response } from 'express';
import dotenv from "dotenv";
import { RUTA } from '../routes/ruta';
import rutas_trabajadores from '../routes/ruta_trabajadores';
import rutas_inventariado from '../routes/ruta_inventariado';

class SERVER {
    // propiedades
    private app : Application;
    private port : string;

    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.port = process.env.PORT || "3000"

        this.middlewares();
        this.routes();
    }

    //Metodos

    runServer(){
        this.app.listen(this.port, () => {
            console.log(`[server]: SERVER is running at 
            http://localhost:${this.port}`);

          });
    }
    middlewares(){
        //Usar CORS

        // Habilitar el formato json

        // Carpeta publica
    }

    routes(){
        this.app.use('/', RUTA )
        this.app.use('/trabajadores', rutas_trabajadores)
        this.app.use('/inventariado', rutas_inventariado)
    }

}

export default SERVER
import express, { Application, Express, Request, Response } from 'express';
import dotenv from "dotenv";
import rutas_trabajadores from '../routes/ruta_trabajadores';

class SERVER {
    // propiedades
    private app : Application;
    private port : string;

    constructor(){
        this.app = express()
        this.port = process.env.PORT || "3000"
        this.app.use(express.json())

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
        this.app.use('/trabajadores', rutas_trabajadores )
    }

}

export default SERVER
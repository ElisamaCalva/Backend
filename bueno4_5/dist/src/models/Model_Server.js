"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ruta_1 = require("../routes/ruta");
const ruta_trabajadores_1 = __importDefault(require("../routes/ruta_trabajadores"));
const ruta_inventariado_1 = __importDefault(require("../routes/ruta_inventariado"));
class SERVER {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.port = process.env.PORT || "3000";
        this.middlewares();
        this.routes();
    }
    //Metodos
    runServer() {
        this.app.listen(this.port, () => {
            console.log(`[server]: SERVER is running at 
            http://localhost:${this.port}`);
        });
    }
    middlewares() {
        //Usar CORS
        // Habilitar el formato json
        // Carpeta publica
    }
    routes() {
        this.app.use('/', ruta_1.RUTA);
        this.app.use('/trabajadores', ruta_trabajadores_1.default);
        this.app.use('/inventariado', ruta_inventariado_1.default);
    }
}
exports.default = SERVER;

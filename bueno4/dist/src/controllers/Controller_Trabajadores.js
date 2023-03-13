"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarallTrabajador = exports.eliminarTrabajador = exports.actualizarTrabajador = exports.crear = exports.obtener1Trabajador = exports.obtenerAllTrabajadores = exports.Controller_trabajadores = void 0;
const client_1 = require("@prisma/client");
const Controller_trabajadores = () => { };
exports.Controller_trabajadores = Controller_trabajadores;
const prisma = new client_1.PrismaClient();
// export async function main() {
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODYYYYYY", req.body);
        const { nombre, apellidos, numero_trabajador, id_area, estatus } = req.body;
        const tb_trabajadoress = yield prisma.tb_trabajadores.create({
            data: {
                nombre,
                apellidos,
                numero_trabajador,
                id_area,
                estatus
            },
        });
        res.status(200).json({
            menssage: "Creacion completa",
            success: true,
            data: tb_trabajadoress
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error al crear",
            error
        });
    }
});
exports.crear = crear;
// Obtener todos los usuarios alumnos
const obtenerAllTrabajadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const get1 = yield prisma.tb_trabajadores.findMany();
        res.status(200).json({
            menssage: "Todos los registros de trabajadores",
            success: true,
            data: get1
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error al buscar",
            error
        });
    }
});
exports.obtenerAllTrabajadores = obtenerAllTrabajadores;
// Obtener un usuario 
const obtener1Trabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_Trabajador = Number(req.params.id_Trabajador);
        const Trabajador = yield prisma.tb_trabajadores.findUnique({
            where: {
                id_Trabajador
            }
        });
        if (!Trabajador) {
            res.status(404).json({
                success: false,
                message: "Trabajador no encontrado",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: Trabajador,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error al buscar",
            error
        });
    }
});
exports.obtener1Trabajador = obtener1Trabajador;
const actualizarTrabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_Trabajador1 = Number(req.params.id_Trabajador);
        const { nombre, apellidos, numero_trabajador, id_area, estatus } = req.body;
        const actTrab = yield prisma.tb_trabajadores.update({
            where: {
                id_Trabajador: id_Trabajador1
            },
            data: {
                nombre,
                apellidos,
                numero_trabajador,
                id_area,
                estatus
            },
        });
        res.status(200).json({
            menssage: "Actualizacion Completa",
            success: true,
            data: actTrab
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error al actulizar trabajador",
            error
        });
    }
});
exports.actualizarTrabajador = actualizarTrabajador;
const eliminarTrabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_Trabajador = req.params.id_Trabajador;
        console.log(id_Trabajador);
        const delete1 = yield prisma.tb_trabajadores.delete({
            where: {
                id_Trabajador: Number(id_Trabajador)
            },
        });
        res.status(200).json({
            message: "Eliminado Completado",
            success: true,
            data: id_Trabajador
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error al eliminar",
            error
        });
    }
});
exports.eliminarTrabajador = eliminarTrabajador;
const eliminarallTrabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delete2 = yield prisma.tb_trabajadores.deleteMany({});
        res.status(200).json({
            message: "Datos eliminados",
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error al eliminar",
            error
        });
    }
});
exports.eliminarallTrabajador = eliminarallTrabajador;

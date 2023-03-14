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
exports.obtener1objeto = exports.crear = exports.Controller_Inventariado = void 0;
const client_1 = require("@prisma/client");
const Controller_Inventariado = () => { };
exports.Controller_Inventariado = Controller_Inventariado;
const prisma = new client_1.PrismaClient();
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { numero_serie, descripcion, marca, color, observaciones, numero_etiqueta, estatus, tipo } = req.body;
        const crear = yield prisma.tb_inventariado.create({
            data: {
                numero_serie,
                descripcion,
                marca,
                color,
                observaciones,
                numero_etiqueta,
                estatus,
                tipo
            },
        });
        res.status(200).json({
            menssage: "Creacion completa",
            success: true,
            data: crear
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
const obtener1objeto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_Recurso = Number(req.params.id_Recurso);
        const Objeto = yield prisma.tb_inventariado.findUnique({
            where: {
                id_Recurso
            }
        });
        if (!Objeto) {
            res.status(404).json({
                success: false,
                message: "objeto no encontrado",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: Objeto,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error al buscar",
            error
        });
    }
});
exports.obtener1objeto = obtener1objeto;

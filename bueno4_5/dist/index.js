"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importar la clase
const Model_Server_1 = __importDefault(require("./src/models/Model_Server"));
const server = new Model_Server_1.default();
server.runServer();

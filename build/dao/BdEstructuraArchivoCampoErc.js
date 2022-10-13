"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BdEstructuraArchivoCampoErc {
    static buscarTodos() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from bd_estructura_archivo_campo_erc", function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.default = BdEstructuraArchivoCampoErc;
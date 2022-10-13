"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
var moment = require('moment');
class CAC_ERC {
    static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into cuenta_erc set ?', newDatos, function (err, result, fields) {
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
    consultarDatos(page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo) {
        return new Promise(function (resolev, reject) {
            try {
                var query = " SELECT C.CAMPO_5, C.CAMPO_6, C.CAMPO_1, C.CAMPO_2, C.CAMPO_3, C.CAMPO_4, C.CAMPO_7, C.CAMPO_8  ";
                query += "FROM cuenta_erc C  where C.CAMPO_5 LIKE '%" + tipoDocumento + "%' and C.CAMPO_6 LIKE '%" + NoDocumento + "%'  and C.CAMPO_1 LIKE '%" + primerNombre + "%'  and C.CAMPO_3 LIKE '%" + primerApellido + "%'  and C.CAMPO_8 LIKE '%" + sexo + "%' limit ?,?  ";
                database_1.default.query(query, [page, row], function (err, result, fields) {
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
    getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select count(0) as numero_registro from cuenta_erc ";
                database_1.default.query(query, function (err, result, fields) {
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
    getOne(CAMPO_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("SELECT * FROM cuenta_erc where CAMPO_6 = ? ", [CAMPO_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    getOne2(CAMPO_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("SELECT ID_CUENTA_ERC FROM cuenta_erc where CAMPO_6 = ? ", [CAMPO_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result[0].ID_CUENTA_ERC);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    actualizarDatos(newDatos, CAMPO_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('UPDATE cuenta_erc set ? where cuenta_erc.CAMPO_6 = ? ', [newDatos, CAMPO_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    consultaAfiliado(Campo_6, Campo_5) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('select * from afiliado where afiliado.NUMERO_IDENTIFICACION = ? and TIPO_DOCUMENTO = ?  ', [Campo_6, Campo_5], function (err, result, fields) {
                    if (err)
                        throw err;
                    for (let index = 0; index < result.length; index++) {
                        const element = result[index];
                        element.FECHA_NACIMIENTO = moment(new Date(element.FECHA_NACIMIENTO)).format('YYYY-MM-DD');
                        element.FECHA_AFILIACION = moment(new Date(element.FECHA_AFILIACION)).format('YYYY-MM-DD');
                        resolev(element);
                    }
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    consultarCAC(Campo_6, Campo_5) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('select * from cuenta_erc where cuenta_erc.CAMPO_6 = ? and cuenta_erc.CAMPO_5 = ? ', [Campo_6, Campo_5], function (err, result, fields) {
                    if (err)
                        throw err;
                    for (let index = 0; index < result.length; index++) {
                        const element = result[index];
                        element.CAMPO_7 = moment(new Date(element.CAMPO_7)).format('YYYY-MM-DD');
                        element.CAMPO_16 = moment(new Date(element.CAMPO_16)).format('YYYY-MM-DD');
                        resolev(element);
                    }
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.default = CAC_ERC;

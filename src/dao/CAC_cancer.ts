import pool from '../database'
var moment = require('moment');

class CAC_cancer {

    public static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into cuenta_cancer set ? ', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                const Clientes = pool.query("select count(0) as numero_registro from cuenta_cancer", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron Datos' });
            };
        });
    }

    public static CargarRegistroCancer(Tipodocumento, numerodocumeto, page, row) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT ID_CUENTA_CANCER, CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8 ";
                query += "from cuenta_cancer";
                query += " where CAMPO_5 LIKE '%" + Tipodocumento + "%' and CAMPO_6 LIKE '%" + numerodocumeto + "%' limit ?,? ";
                const Clientes = pool.query(query, [page, row], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            };
        });
    }

    public Actualizarcancer(newDatos, Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('UPDATE cuenta_cancer set ? where cuenta_cancer.CAMPO_6 = ? ', [newDatos, Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });

    }

    public static CargarIdentificacion(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from cuenta_cancer where cuenta_cancer.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            };
        });
    }

    //cargar Id cuenta cancer
    public getOne(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select ID_CUENTA_CANCER from cuenta_cancer where cuenta_cancer.CAMPO_6  = ? ", [Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result[0].ID_CUENTA_CANCER)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            };
        });
    }


    public static consultaAfiliado(Campo_6, Campo_5 ) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('select * from afiliado where afiliado.NUMERO_IDENTIFICACION = ? and afiliado.TIPO_DOCUMENTO = ?  ', [Campo_6, Campo_5 ], function (err, result, fields) {
                    if (err) throw err;
                    for (let index = 0; index < result.length; index++) {
                        const element = result[index];
                        element.FECHA_NACIMIENTO = moment(new Date(element.FECHA_NACIMIENTO)).format('YYYY-MM-DD')
                        element.FECHA_AFILIACION = moment(new Date(element.FECHA_AFILIACION)).format('YYYY-MM-DD')
                        resolev(element)
                    }
                }); 
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static consultarCAC(Campo_6, Campo_5 ) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('select * from cuenta_cancer where cuenta_cancer.CAMPO_6 = ? and cuenta_cancer.CAMPO_5 = ? ', [Campo_6, Campo_5 ], function (err, result, fields) {
                    if (err) throw err;
                    for (let index = 0; index < result.length; index++) {
                        const element = result[index];
                        element.CAMPO_7 = moment(new Date(element.CAMPO_7)).format('YYYY-MM-DD')
                        element.CAMPO_16 = moment(new Date(element.CAMPO_16)).format('YYYY-MM-DD')
                        resolev(element)
                    }
                }); 
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }




}

export default CAC_cancer;
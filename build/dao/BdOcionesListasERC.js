"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BdOcionesListasERC {
    static cargarTipoDocumento5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C4_CAMPO_5' ", function (err, result, fields) {
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
    static cargarSexo8() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C7_CAMPO_8' ", function (err, result, fields) {
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
    static cargarRegimenAfilicacion9() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C8_CAMPO_9' ", function (err, result, fields) {
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
    static cargarPertenenciaEtnica11() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C10_CAMPO_11' ", function (err, result, fields) {
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
    static cargarGrupopoblacional12() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'erc.C11_CAMPO_12' ", function (err, result, fields) {
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
    static cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C17_CAMPO_18' ", function (err, result, fields) {
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
    static cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C20_CAMPO_20' ", function (err, result, fields) {
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
    static cargarEtiologíadelaERC22() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C23_CAMPO_22' ", function (err, result, fields) {
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
    static cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C45_CAMPO_36' ", function (err, result, fields) {
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
    static cargarElusuariorecibeAntagonista37() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C46_CAMPO_37' ", function (err, result, fields) {
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
    static cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C47_CAMPO_38' ", function (err, result, fields) {
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
    static cargarEstadioERCEnfermedad39() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C48_CAMPO_39' ", function (err, result, fields) {
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
    static cargarLapersonaencuentraprogramatenciónERC41() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C50_CAMPO_41' ", function (err, result, fields) {
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
    static cargarModoInicioTerapiaReemplazoRenal43() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C52_CAMPO_43' ", function (err, result, fields) {
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
    static cargarHemodiálisis46() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C55_CAMPO_46' ", function (err, result, fields) {
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
    static cargarCostototalhemodiálisisduranteperíodoreporte48() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C57_CAMPO_48' ", function (err, result, fields) {
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
    static cargarVacunaHepatitis54() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C63_CAMPO_54' ", function (err, result, fields) {
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
    static cargarTerapiaDialíticaERCestadio57() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C66_CAMPO_57' ", function (err, result, fields) {
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
    static cargarÚltimavaloraciónclínicapornefrología62() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C71_CAMPO_62' ", function (err, result, fields) {
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
    static cargarSereportócánceractivoúltimos12mese62_1() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C72_CAMPO_62_1' ", function (err, result, fields) {
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
    static cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C73_CAMPO_62_2' ", function (err, result, fields) {
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
    static cargarSereportocomocontraindicaciónparatransplanterenal62_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C74_CAMPO_62_3' ", function (err, result, fields) {
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
    static cargarSereportocontraindicacióntransplanterenal62_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C75_CAMPO_62_4' ", function (err, result, fields) {
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
    static cargarSereportocontraindicacióntransplanterena62_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C76_CAMPO_62_5' ", function (err, result, fields) {
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
    static cargarSereportoenfermedadcardiaca62_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C77_CAMPO_62_6' ", function (err, result, fields) {
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
    static cargarSereportoinfecciónVIH62_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C78_CAMPO_62_7' ", function (err, result, fields) {
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
    static cargarSereportoinfecciónVIH62_8() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C79_CAMPO_62_8' ", function (err, result, fields) {
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
    static cargarSereportocomocontraindicación62_9() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C80_CAMPO_62_9' ", function (err, result, fields) {
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
    static cargarSereportocomocontraindicación62_10() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C81_CAMPO_62_10' ", function (err, result, fields) {
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
    static cargarSereportocomocontraindicación62_11() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C82_CAMPO_62_11' ", function (err, result, fields) {
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
    static cargarElusuarioharecibidotrasplanterenal64() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C85_CAMPO_64' ", function (err, result, fields) {
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
    static cargarTipodedonante67() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C88_CAMPO_67' ", function (err, result, fields) {
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
    static cargarElusuariohapresentadoalgunacomplicación69() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C90_CAMPO_69' ", function (err, result, fields) {
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
    static cargarEnalgunmomentodesdeelultimoreporte70_1() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C99_CAMPO_70_1' ", function (err, result, fields) {
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
    static cargarEnalgunmomentodesdeelultimoreporte70_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C100_CAMPO_70_2' ", function (err, result, fields) {
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
    static cargarEnalgunmomentodesdeelultimoreporte70_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C101_CAMPO_70_3' ", function (err, result, fields) {
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
    static cargarEnalgunmomentodesdeelultimoreporte70_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C102_CAMPO_70_4' ", function (err, result, fields) {
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
    static cargarEnalgunmomentodesdeelultimoreporte70_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C103_CAMPO_70_5' ", function (err, result, fields) {
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
    static cargarEnalgunmomentodesdeelultimoreporte70_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C104_CAMPO_70_6' ", function (err, result, fields) {
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
    static cargarNovedadconrespectoalreporteanterior79() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C116_CAMPO_79' ", function (err, result, fields) {
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
    static cargarCausadeMuerte80() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C117_CAMPO_80' ", function (err, result, fields) {
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
exports.default = BdOcionesListasERC;

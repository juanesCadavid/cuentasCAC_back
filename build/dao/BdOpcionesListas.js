"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BD_opciones_listas {
    static cargarGrupoPoblacional3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C2_CAMPO_3'", function (err, result, fields) {
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
    static cargarRadiografiaManosDiagnóstico22() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C21_CAMPO_22' ", function (err, result, fields) {
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
    static cargarRadiografiaPiesDiagnóstico23() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C22_CAMPO_23' ", function (err, result, fields) {
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
    static cargarFactorReumatoideoInicial26() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C25_CAMPO_26' ", function (err, result, fields) {
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
    static cargarParcialOrinaInicial31() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C30_CAMPO_31' ", function (err, result, fields) {
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
    static cargarALTInicial32() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C31_CAMPO_32' ", function (err, result, fields) {
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
    static AntiCCPDiagnóstico33() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C32_CAMPO_33' ", function (err, result, fields) {
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
    static cargarHTADiagnóstico34() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C33_CAMPO_34' ", function (err, result, fields) {
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
    static DMDiagnóstico35() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C34_CAMPO_35' ", function (err, result, fields) {
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
    static cargarECVDiagnóstico36() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C35_CAMPO_36' ", function (err, result, fields) {
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
    static cargarERCDiagnóstico37() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C36_CAMPO_37' ", function (err, result, fields) {
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
    static cargarOsteoporosisDiagnóstico38() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C37_CAMPO_38' ", function (err, result, fields) {
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
    static cargarSindromeSjogrenDiagnóstico39() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C38_CAMPO_39' ", function (err, result, fields) {
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
    static cargarProfesionalRealizóPrimerDAS2841() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C40_CAMPO_41' ", function (err, result, fields) {
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
    static cargarAnalgesicosNoOpioidesInicio45_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C45_CAMPO_45_2' ", function (err, result, fields) {
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
    static cargarAnalgesicosInicio145_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C46_CAMPO_45_3' ", function (err, result, fields) {
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
    static cargarAINESinicio45_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C46_CAMPO_45_4' ", function (err, result, fields) {
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
    static cargarCorticoidesInicio45_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C46_CAMPO_45_5' ", function (err, result, fields) {
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
    static cargarTamizajeTBantesinicioDMARD145_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C50_CAMPO_45_7' ", function (err, result, fields) {
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
    static cargarAntecedentelinfomaantesinicioDMARD45_8() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C51_CAMPO_45_8' ", function (err, result, fields) {
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
    static cargarAzatioprina46_1() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C52_CAMPO_46_1' ", function (err, result, fields) {
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
    static cargarCiclosporina46_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C53_CAMPO_46_2' ", function (err, result, fields) {
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
    static cargarCiclofosfamida46_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C54_CAMPO_46_3' ", function (err, result, fields) {
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
    static cargarCloroquina46_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C55_CAMPO_46_4' ", function (err, result, fields) {
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
    static cargarDpenicilaimina46_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C56_CAMPO_46_5'", function (err, result, fields) {
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
    static cargarEtanercept46_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C57_CAMPO_46_6' ", function (err, result, fields) {
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
    static cargarLeflunomida46_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C58_CAMPO_46_7' ", function (err, result, fields) {
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
    static cargarMetotrexate46_8() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C59_CAMPO_46_8' ", function (err, result, fields) {
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
    static cargarRituximab46_9() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C60_CAMPO_46_9' ", function (err, result, fields) {
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
    static cargarSulfasalazina46_10() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C61_CAMPO_46_10' ", function (err, result, fields) {
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
    static cargarAbatacept47_1() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C62_CAMPO_47_1' ", function (err, result, fields) {
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
    static cargarAdalimumab_47_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C63_CAMPO_47_2' ", function (err, result, fields) {
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
    static cargarCertolizumab47_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C64_CAMPO_47_3' ", function (err, result, fields) {
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
    static cargarGolimumab47_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C65_CAMPO_47_4' ", function (err, result, fields) {
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
    static cargarHidroxicloroquina47_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C66_CAMPO_47_5' ", function (err, result, fields) {
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
    static cargarInfliximab47_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C67_CAMPO_47_6' ", function (err, result, fields) {
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
    static cargarSalesdeoro47_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C68_CAMPO_47_7' ", function (err, result, fields) {
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
    static cargarTocilizumab47_8() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C69_CAMPO_47_8' ", function (err, result, fields) {
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
    static cargarTofacitinib47_9() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C70_CAMPO_47_9' ", function (err, result, fields) {
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
    static cargarAnakinra47_10() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C71_CAMPO_47_10' ", function (err, result, fields) {
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
    static cargarRadiografiademanos49() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C77_CAMPO_49' ", function (err, result, fields) {
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
    static cargarRadiografiadepies50() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C78_CAMPO_50' ", function (err, result, fields) {
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
    static cargarParcialdeOrinaúltimosemestre57() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C85_CAMPO_57' ", function (err, result, fields) {
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
    static cargarALTultimosemestre58() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C86_CAMPO_58' ", function (err, result, fields) {
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
    static cargarHTAactual59() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C87_CAMPO_59' ", function (err, result, fields) {
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
    static cargarDMactua60() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C88_CAMPO_60' ", function (err, result, fields) {
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
    static cargarECVactual61() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C89_CAMPO_61' ", function (err, result, fields) {
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
    static cargarERCactual62() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C90_CAMPO_62' ", function (err, result, fields) {
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
    static cargarOsteoporosisactual63() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C91_CAMPO_63' ", function (err, result, fields) {
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
    static cargarSindromeSjogrenactual64() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C92_CAMPO_64' ", function (err, result, fields) {
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
    static cargarProfesionalrealizoultimoDAS28_66() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C94_CAMPO_66' ", function (err, result, fields) {
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
    static cargarEstadoactividadactualdelaARegúnDAS28_68() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C96_CAMPO_68' ", function (err, result, fields) {
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
    static cargarAnalgesicosNoOpioides71_1() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C99_CAMPO_71_1' ", function (err, result, fields) {
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
    static cargarAnalgesicosOpioides71_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C100_CAMPO_71_2' ", function (err, result, fields) {
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
    static cargarAINES71_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C101_CAMPO_71_3' ", function (err, result, fields) {
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
    static cargarCorticoides71_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C102_CAMPO_71_4' ", function (err, result, fields) {
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
    static cargarCalcio71_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C104_CAMPO_71_6' ", function (err, result, fields) {
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
    static cargarVitaminaD71_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C105_CAMPO_71_7' ", function (err, result, fields) {
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
    static cargarAzatioprina73_1() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C107_CAMPO_73_1' ", function (err, result, fields) {
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
    static cargarCiclosporina73_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C108_CAMPO_73_2' ", function (err, result, fields) {
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
    static cargarCiclofosfamida73_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C109_CAMPO_73_3' ", function (err, result, fields) {
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
    static cargarCorticoides73_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C110_CAMPO_73_4' ", function (err, result, fields) {
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
    static cargarDpenicilaimina73_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C111_CAMPO_73_5' ", function (err, result, fields) {
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
    static cargarEtanercept73_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C112_CAMPO_73_6' ", function (err, result, fields) {
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
    static cargarLeflunomida73_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C113_CAMPO_73_7' ", function (err, result, fields) {
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
    static cargarMetotrexate73_8() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C114_CAMPO_73_8' ", function (err, result, fields) {
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
    static cargarRituximab73_9() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C115_CAMPO_73_9' ", function (err, result, fields) {
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
    static cargarSulfasalazina73_10() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C116_CAMPO_73_10' ", function (err, result, fields) {
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
    static cargarAbatacept74_1() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'cachemofiliaarchivo.C117_CAMPO_74_1' ", function (err, result, fields) {
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
    static cargarAdalimumab74_2() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C118_CAMPO_74_2' ", function (err, result, fields) {
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
    static cargarCertolizumab74_3() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C119_CAMPO_74_3' ", function (err, result, fields) {
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
    static cargarGolimumab74_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C120_CAMPO_74_4' ", function (err, result, fields) {
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
    static cargaHidroxicloroquina74_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C121_CAMPO_74_5' ", function (err, result, fields) {
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
    static cargarInfliximab74_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C122_CAMPO_74_6' ", function (err, result, fields) {
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
    static cargarSalesdeoro74_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C123_CAMPO_74_7' ", function (err, result, fields) {
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
    static cargarTocilizumab74_8() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C124_CAMPO_74_8' ", function (err, result, fields) {
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
    static cargarTofacitinib74_9() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C125_CAMPO_74_9' ", function (err, result, fields) {
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
    static cargarAnakinra74_10() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C126_CAMPO_74_10' ", function (err, result, fields) {
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
    static cargarReemplazoarticular1porAR575_4() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C134_CAMPO_75_4' ", function (err, result, fields) {
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
    static cargarReemplazoarticular2porAR75_5() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C135_CAMPO_75_5' ", function (err, result, fields) {
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
    static cargarReemplazoarticular3porAR75_6() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C136_CAMPO_75_6' ", function (err, result, fields) {
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
    static cargarReemplazoarticula4porAR75_7() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C137_CAMPO_75_7' ", function (err, result, fields) {
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
    static cargarQuienhacelaatencionclinicaparaAR80() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C142_CAMPO_80' ", function (err, result, fields) {
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
    static cargarNovedaddelpacienterespectoalreporteanterior81() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C143_CAMPO_81' ", function (err, result, fields) {
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
    static cargarCausademuerte85() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.C147_CAMPO_85' ", function (err, result, fields) {
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
exports.default = BD_opciones_listas;

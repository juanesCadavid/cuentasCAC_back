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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bdOpcionesListasERCControllers = void 0;
const BdOcionesListasERC_1 = __importDefault(require("../dao/BdOcionesListasERC"));
class BdOpcionesListasERCControllers {
    cargarTipoDocumento5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarTipoDocumento5();
            res.json(ERC);
        });
    }
    cargarSexo8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSexo8();
            res.json(ERC);
        });
    }
    cargarRegimenAfilicacion9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarRegimenAfilicacion9();
            res.json(ERC);
        });
    }
    cargarPertenenciaEtnica11(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarPertenenciaEtnica11();
            res.json(ERC);
        });
    }
    cargarGrupopoblacional12(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarGrupopoblacional12();
            res.json(ERC);
        });
    }
    cargarGElusuarioiagn??sticoconfirmadoHipertensi??nArterialHTA18(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarGElusuarioiagn??sticoconfirmadoHipertensi??nArterialHTA18();
            res.json(ERC);
        });
    }
    cargarElusuariotienediagn??sticoconfirmadoDiabetesMellitus20(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarElusuariotienediagn??sticoconfirmadoDiabetesMellitus20();
            res.json(ERC);
        });
    }
    cargarEtiolog??adelaERC22(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEtiolog??adelaERC22();
            res.json(ERC);
        });
    }
    cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36();
            res.json(ERC);
        });
    }
    cargarElusuariorecibeAntagonista37(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarElusuariorecibeAntagonista37();
            res.json(ERC);
        });
    }
    cargarElusuariotienediagn??sticoenfermedadrenalcr??nicacualquiersusestadios38(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarElusuariotienediagn??sticoenfermedadrenalcr??nicacualquiersusestadios38();
            res.json(ERC);
        });
    }
    cargarEstadioERCEnfermedad39(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEstadioERCEnfermedad39();
            res.json(ERC);
        });
    }
    cargarLapersonaencuentraprogramatenci??nERC41(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarLapersonaencuentraprogramatenci??nERC41();
            res.json(ERC);
        });
    }
    cargarModoInicioTerapiaReemplazoRenal43(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarModoInicioTerapiaReemplazoRenal43();
            res.json(ERC);
        });
    }
    cargarHemodi??lisis46(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarHemodi??lisis46();
            res.json(ERC);
        });
    }
    cargarCostototalhemodi??lisisduranteper??odoreporte48(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarCostototalhemodi??lisisduranteper??odoreporte48();
            res.json(ERC);
        });
    }
    cargarVacunaHepatitis54(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarVacunaHepatitis54();
            res.json(ERC);
        });
    }
    cargarTerapiaDial??ticaERCestadio57(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarTerapiaDial??ticaERCestadio57();
            res.json(ERC);
        });
    }
    cargar??ltimavaloraci??ncl??nicapornefrolog??a62(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargar??ltimavaloraci??ncl??nicapornefrolog??a62();
            res.json(ERC);
        });
    }
    cargarSereport??c??nceractivo??ltimos12mese62_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereport??c??nceractivo??ltimos12mese62_1();
            res.json(ERC);
        });
    }
    cargarSereportoinfecci??ncr??nicaactivatratadanocontrolada62_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportoinfecci??ncr??nicaactivatratadanocontrolada62_2();
            res.json(ERC);
        });
    }
    cargarSereportocomocontraindicaci??nparatransplanterenal62_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportocomocontraindicaci??nparatransplanterenal62_3();
            res.json(ERC);
        });
    }
    cargarSereportocontraindicaci??ntransplanterenal62_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportocontraindicaci??ntransplanterenal62_4();
            res.json(ERC);
        });
    }
    cargarSereportocontraindicaci??ntransplanterena62_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportocontraindicaci??ntransplanterena62_5();
            res.json(ERC);
        });
    }
    cargarSereportoenfermedadcardiaca62_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportoenfermedadcardiaca62_6();
            res.json(ERC);
        });
    }
    cargarSereportoinfecci??nVIH62_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportoinfecci??nVIH62_7();
            res.json(ERC);
        });
    }
    cargarSereportoinfecci??nVIH62_8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportoinfecci??nVIH62_8();
            res.json(ERC);
        });
    }
    cargarSereportocomocontraindicaci??n62_9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportocomocontraindicaci??n62_9();
            res.json(ERC);
        });
    }
    cargarSereportocomocontraindicaci??n62_10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportocomocontraindicaci??n62_10();
            res.json(ERC);
        });
    }
    cargarSereportocomocontraindicaci??n62_11(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarSereportocomocontraindicaci??n62_11();
            res.json(ERC);
        });
    }
    cargarElusuarioharecibidotrasplanterenal64(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarElusuarioharecibidotrasplanterenal64();
            res.json(ERC);
        });
    }
    cargarTipodedonante67(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarTipodedonante67();
            res.json(ERC);
        });
    }
    cargarElusuariohapresentadoalgunacomplicaci??n69(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarElusuariohapresentadoalgunacomplicaci??n69();
            res.json(ERC);
        });
    }
    cargarEnalgunmomentodesdeelultimoreporte70_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEnalgunmomentodesdeelultimoreporte70_1();
            res.json(ERC);
        });
    }
    cargarEnalgunmomentodesdeelultimoreporte70_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEnalgunmomentodesdeelultimoreporte70_2();
            res.json(ERC);
        });
    }
    cargarEnalgunmomentodesdeelultimoreporte70_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEnalgunmomentodesdeelultimoreporte70_3();
            res.json(ERC);
        });
    }
    cargarEnalgunmomentodesdeelultimoreporte70_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEnalgunmomentodesdeelultimoreporte70_4();
            res.json(ERC);
        });
    }
    cargarEnalgunmomentodesdeelultimoreporte70_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEnalgunmomentodesdeelultimoreporte70_5();
            res.json(ERC);
        });
    }
    cargarEnalgunmomentodesdeelultimoreporte70_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarEnalgunmomentodesdeelultimoreporte70_6();
            res.json(ERC);
        });
    }
    cargarNovedadconrespectoalreporteanterior79(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarNovedadconrespectoalreporteanterior79();
            res.json(ERC);
        });
    }
    cargarCausadeMuerte80(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ERC = yield BdOcionesListasERC_1.default.cargarCausadeMuerte80();
            res.json(ERC);
        });
    }
}
exports.bdOpcionesListasERCControllers = new BdOpcionesListasERCControllers();

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
const Excel = require('exceljs');
const fs = require('fs');
class CrearExcel {
    static generateExcel(Datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(Datos);
            // Execute the statement to fetch data in results
            const results = Datos;
            // Create Excel workbook and worksheet
            const workbook = new Excel.Workbook();
            const worksheet = workbook.addWorksheet('Logs herrores');
            // Define columns in the worksheet, these columns are identified using a key.
            worksheet.getRow(1).getCell(1).value = 'Radicado proceso'; //Numero de Radicacion
            worksheet.getRow(2).getCell(1).value = "Archivo procesado"; //Nombre del archivo
            worksheet.getRow(3).getCell(1).value = 'Fecha proceso'; //Fecha del proceso
            worksheet.getRow(4).getCell(1).value = 'Errores encontrados'; //canridad de errores
            worksheet.getRow(5).getCell(1).value = 'Cantidad Filas'; //Filas encontradas 
            worksheet.getRow(6).getCell(1).value = 'Usuario reporta'; //Usuario
            worksheet.getRow(1).getCell(3).value = yield Datos[0].Numero_radicacion;
            worksheet.getRow(2).getCell(3).value = yield Datos[0].Nombre_archivo;
            worksheet.getRow(3).getCell(3).value = yield Datos[0].Fecha_procesado;
            worksheet.getRow(4).getCell(3).value = yield Datos[0].total_errores;
            worksheet.getRow(5).getCell(3).value = yield Datos[0].Registros_procesados;
            worksheet.getRow(6).getCell(3).value = yield Datos[0].Usuario;
            worksheet.getRow(7).getCell(1).value = 'Fila';
            worksheet.getRow(7).getCell(2).value = 'Columna';
            worksheet.getRow(7).getCell(3).value = 'Tipo error';
            worksheet.getRow(7).getCell(4).value = 'Descripción';
            const fileName = `${yield Datos[0].Numero_radicacion}.xlsx`;
            worksheet.eachRow(function (row, rowNumber) {
                row.eachCell((cell, colNumber) => {
                    if (rowNumber == 1 || rowNumber == 3 || rowNumber == 4 || rowNumber == 5) {
                        // First set the background of header row
                        cell.alignment = {
                            vertical: 'middle',
                            horizontal: 'left'
                        };
                    }
                });
                row.commit();
            });
            //Combinacion de celdas
            worksheet.mergeCells(`A1:B1`);
            worksheet.mergeCells(`A2:B2`);
            worksheet.mergeCells(`A3:B3`);
            worksheet.mergeCells(`A4:B4`);
            worksheet.mergeCells(`A5:B5`);
            worksheet.mergeCells(`A6:B6`);
            worksheet.mergeCells(`C1:D1`);
            worksheet.mergeCells(`C2:D2`);
            worksheet.mergeCells(`C3:D3`);
            worksheet.mergeCells(`C4:D4`);
            worksheet.mergeCells(`C5:D5`);
            worksheet.mergeCells(`C6:D6`);
            worksheet.columns = [
                { key: 'fila_del_error', width: 10 },
                { key: 'Numero_campo', width: 10 },
                { key: 'Tipo_error', width: 10 },
                { key: 'Descripcion', width: 160 },
            ];
            for (const row of results) {
                worksheet.addRow(row);
            }
            worksheet.eachRow(function (row, rowNumber) {
                row.eachCell((cell, colNumber) => {
                    if (rowNumber == 7) {
                        // First set the background of header row
                        cell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: '048A88' },
                        };
                    }
                });
                row.commit();
            });
            // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            // res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
            // Finally save the worksheet into the folder from where we are running the code. 
            workbook.xlsx.writeFile("./logsExcel/" + fileName).then(function () {
                console.log("ya guardo el excel");
            });
            // await workbook.xlsx.writeFile(fileName);
        });
    }
}
exports.default = CrearExcel;

import { Request, Response, json } from 'express'
import CAC_ERC from '../dao/CAC_ERC'
class CAC_ERCControllers {

  public async guardarDatos(req: Request, res: Response) {
    console.log(req.body)
    var almacenar = await CAC_ERC.guardarDatos(req.body)
    res.json(almacenar);
  }

  public async consultarDatos(req: Request, res: Response) {
    const { page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo } = req.body
    const pagina = row * page
    const oCACErc = new CAC_ERC();
    const erc = await oCACErc.consultarDatos(pagina, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo)
    const data = await oCACErc.getNumeroRegistro();
    const respuesta = { ERC: erc, numero_registro: data[0].numero_registro };
    res.json(respuesta);
  }

  public async cargarPaciente(req: Request, res: Response) {
    const { CAMPO_6 } = req.params;
    const oCACErc = new CAC_ERC();
    const erc = await oCACErc.getOne(CAMPO_6);
    res.json(erc)
  }

  public async actualizarDatos(req: Request, res: Response) {
    const { CAMPO_6 } = req.params;
    console.log(CAMPO_6)
    const oCACErc = new CAC_ERC();
    const erc = await oCACErc.actualizarDatos(req.body, CAMPO_6);
    res.json(erc)
  }

  public async buscarAfiliado(req: Request, res: Response) {
    const { Campo_6, Campo_5 } = req.body
    const oCACErc = new CAC_ERC();
    var datos = await oCACErc.consultaAfiliado(Campo_6, Campo_5)
    res.json(datos);
  }

  public async buscarCAC(req: Request, res: Response) {
    const { Campo_6, Campo_5 } = req.body
    const oCACErc = new CAC_ERC();
    var datos = await oCACErc.consultarCAC(Campo_6, Campo_5)
    res.json(datos);
  }
}
export const cac_ERCControllers = new CAC_ERCControllers();
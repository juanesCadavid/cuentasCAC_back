import {Router} from 'express';
import {carguehemofiliacontrollers} from '../controller/CarguehemofiliaControllers';
import multer2 from '../lib/multer2'

class CargahemofiliaRoutes{
    public   router:Router = Router()

    constructor(){
        this.config();
      }

      config():void{
       this.router.post('/guardarHMFile',multer2.single('file'),carguehemofiliacontrollers.guardarHemofiliaFile)
       this.router.post('/',carguehemofiliacontrollers.consultarCargue);
       this.router.get('/',carguehemofiliacontrollers.consultarNombreArchivo);
       this.router.get('/archivocargado/:ID_PROCESO_HEMOFILIA',carguehemofiliacontrollers.consultarUltimoArchivoCargado);
    }
}


const cargahemofiliaRoutes =  new CargahemofiliaRoutes()
export default cargahemofiliaRoutes.router
import {Router} from 'express';
import {request, response} from 'express';
class IndexRoutes{
    public router:Router = Router()

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',(req, res) => res.send('HELLO'))
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router
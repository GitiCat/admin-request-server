import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/icontrollerbase'

class RequestsController implements IControllerBase {
    path: string = '/requests'
    router: express.Router = express.Router()

    constructor() {
        this.initRoutes();    
    }

    public initRoutes() {
        this.router.get('', (req: Request, res: Response, next: express.NextFunction) => {
            res.json({"status": "OK"})
        })
    }
}

export default RequestsController
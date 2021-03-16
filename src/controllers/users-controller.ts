import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/icontrollerbase'

class UsersController implements IControllerBase {
    public path: string = '/users'
    public router: express.Router = express.Router()

    constructor() {
        this.initRoutes()
    }
    
    public initRoutes() {
        this.router.get('', (req: Request, res: Response, next: express.NextFunction) => {
            res.json({"f": "f"})
        })
    }
}

export default UsersController
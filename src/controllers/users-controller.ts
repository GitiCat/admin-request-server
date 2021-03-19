import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/icontrollerbase'
import { UserStatic } from '../db/models/user'

class UsersController implements IControllerBase {
    private dbUser: UserStatic

    public path: string = '/users'
    public router: express.Router = express.Router()

    constructor(usersStatic: UserStatic) {
        this.dbUser = usersStatic
        this.initRoutes()
    }
    
    public initRoutes() {
        this.router.get('', (req: Request, res: Response, next: express.NextFunction) => {
            res.json({"f": "f"})
        })
    }
}

export default UsersController
import * as express from 'express'

interface IControllerBase {
    path: string,
    router: express.Router,
    initRoutes: Function
}

export default IControllerBase
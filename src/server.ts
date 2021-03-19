import App from './app'
import * as express from 'express'
import loggerMiddleware from './middleware/logger'
import UsersController from './controllers/users-controller'
import RequestsController from './controllers/requests-controller'
import { DbConnection } from './db/services/db.service'
import { DbInterface } from 'db/typings/dbInterface'

DbConnection.then((db: DbInterface) => {
    const app = new App({
        host: 'localhost',
        port: 4000,
        middlewares: [
            express.json(),
            express.urlencoded({ extended: false }),
            loggerMiddleware
        ],
        controllers: [
            new UsersController(db.User),
            new RequestsController()
        ]
    })
    
    var httpServer = require('http').Server(app.app)
    httpServer.listen(app.port, app.host, () => {
        console.log(`App listening on the http://${app.host}:${app.port}`)
    })
}).catch(e => {

})
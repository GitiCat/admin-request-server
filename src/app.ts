import express from 'express'
import { Application } from 'express'

type AppTypes = {
    host: string,
    port: number,
    middlewares: any,
    controllers: any
}

export default class App {
    public app: Application
    public host: string
    public port: number

    constructor(props: AppTypes) {
        this.app = express()
        this.host = props.host
        this.port = props.port

        this.assets()
        this.middleware(props.middlewares)
        this.routes(props.controllers)
    }

    private assets() {
        this.app.use(express.static('public'))
    }

    private middleware(middlewares: { forEach: (arg0: (middleware: any) => void) => void }) {
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }) {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.router)
        })
    }
}
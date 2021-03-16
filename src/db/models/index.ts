import { Sequelize } from 'sequelize'
import path from 'path'

const env = process.env.NODE_ENV || 'development'
const config = require(path.resolve(__dirname, 'config/config.json'))[env]
const url = config.url || process.env.DATABASE_CONNECTION_URI

const sequelize = new Sequelize(url, config)

const db = {
    sequelize,
    Sequelize
}

Object.values(db).forEach((model: any) => {
    if(model.associate)
        model.associate(db)
})

export default db
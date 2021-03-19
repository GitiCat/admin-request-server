import * as sequelize from 'sequelize'
import { DbInterface } from '../typings/dbInterface/index'

// Import models
import UserModel from './user'

export const createModels = () : DbInterface => {
    const dbConfig = new sequelize.Sequelize(
        (process.env.DB_NAME = ''),
        (process.env.DB_USER = ''),
        (process.env.DB_PASSWORD = ''),
        {
            port: Number(process.env.DB_PORT) || 3306,
            host: process.env.DB_HOST || 'localhost',
            dialect: 'mysql',
            pool: {
                min: 0,
                max: 10,
                acquire: 30000,
                idle: 10000
            }
        }
    )
    
    const Users = UserModel(dbConfig)
    const db: DbInterface = {
        sequelize: dbConfig,
        User: Users
    }
    
    Object.values(db).forEach((modelName: any) => {
        if(modelName.associate)
            modelName.associate(db)
    })

    return db
}
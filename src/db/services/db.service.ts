import { createModels } from '../models/index'
import { DbInterface } from '../typings/dbInterface/index'
import { NormalLogColor, SuccessLogColor, ErrorLogColor } from '../../log/log.color'

export const DbConnection = new Promise<DbInterface>(async (resolve, reject) => {
    const db: DbInterface = createModels()
    const dbName = db.sequelize.getDatabaseName()
    
    console.log(NormalLogColor, `Process of authorization in ${dbName} database has been started...`)

    await db.sequelize.authenticate()
        .then(() => {console.log(SuccessLogColor, `Database is authorized!`)})
        .catch(e => {
            console.log(ErrorLogColor, `Database authorization error!`)
            reject(e)
        })

    db.sequelize.afterSync(() => console.log(NormalLogColor, 'Starting synchronization of database entities...'));
    await db.sequelize.sync()
        .then(() => {console.log(SuccessLogColor, 'Database entities are in sync!')})
        .catch(e => {
            console.log(ErrorLogColor, `Database entity sync error!`)
            reject(e)
    })

    resolve(db)
})
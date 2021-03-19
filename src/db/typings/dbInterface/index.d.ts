import * as sequelize from 'sequelize'
import { UserStatic } from '../../models/user'

export interface DbInterface {
    sequelize: sequelize.Sequelize,
    User: UserStatic
}
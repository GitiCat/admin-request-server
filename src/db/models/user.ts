import { 
    Model,
    Optional,
    DataTypes 
} from 'sequelize'
import * as Sequelize from 'sequelize'
import { SequelizeAttributes } from '../typings/SequelizeAttributes/index'

interface UserAttributes {
    id: number,
    login: string,
    password: string,
    firstName: string,
    middleName: string,
    lastName: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
        createdAt?: Date,
        updatedAt?: Date
    }

export default (sequelize: Sequelize.Sequelize) 
    : Sequelize.Model<UserInstance, UserAttributes> => {

    const attributes: SequelizeAttributes<UserAttributes> = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.STRING,
            unique: true
        },
        login: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        firstName: {
            allowNull: true,
            type: DataTypes.STRING
        },
        middleName: {
            allowNull: true,
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: true,
            type: DataTypes.STRING
        }
    }

    return sequelize.define<UserInstance, UserAttributes>('users', attributes)
}
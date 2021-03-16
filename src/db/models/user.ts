import { DataTypes, Model, Sequelize, ModelDefined } from 'sequelize'
import { UserAttributes, UserCreationAttributes } from '../types/user'

export interface UserInstance 
    extends Model<UserAttributes, UserCreationAttributes>,
        UserAttributes { }

type UserModelDefined = ModelDefined<UserAttributes, UserCreationAttributes>;

const User = (sequelize: Sequelize) : UserModelDefined => {
    return sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: true,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [3, 100],
                        msg: "Name should be greater than 3 and less than or equal to 100"
                    },
                    notNull: {
                        msg: "Name should be present"
                    }
                }
            }
        },
        {
            tableName: 'users',
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    )
}

export default User;
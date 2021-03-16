export interface UserAttributes {
    id: number,
    name: string,
    createdAt: string,
    updateAt: string
}

export type UserCreationAttributes = Pick<UserAttributes, 'name'>
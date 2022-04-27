export interface IResponseSearch {
    users: IUsersData[]
    message?: string
}

export interface IUsersData {
    username?: string
    email?: string
    roles?: string[]
}
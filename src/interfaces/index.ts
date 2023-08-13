export interface BalanceI {
    uuid?:string
    title: string,
    partial:
        {description: string, value: number}[]
    ,
    total: number
}

export interface UserI {
    id: number,
    name: string,
    lastConnection: string,
}
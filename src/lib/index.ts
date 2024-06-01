export type Create<T1, T2> = (data: T1) => Promise<T2>
export type GetById<T> = (id: number) => Promise<T | null>
export type GetAll<T> = () => Promise<T[]>
export type UpdateById<T1, T2> = (id: number, data: T1) => Promise<T2>
export type DeleteById = (id: number) => Promise<string>

export type ResponseApi<T> = {
    errors?: string[]
    message: string
    data?: T
}

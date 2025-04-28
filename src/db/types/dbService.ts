import {Datos} from "../../types/db/auth"

export interface IDBService {
    getToken(usuario: string, contrasena: string): Promise<Datos[]>
}
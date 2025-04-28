import { IDBService } from "../db/types/dbService";
import { Datos } from "../types/db/auth";

export class AuthController {
    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async getAuth(usuario: string, contrasena: string): Promise<Datos | null> {
        const datos = await this.dbService.getToken(usuario, contrasena);
        const user = datos.find(
            (dato) => dato.usuario === usuario && dato.contrasena === contrasena
        );

        if (user) {
            return user; // Return the full user object if found
        }

        return null; // Return null if no match is found
    }
}
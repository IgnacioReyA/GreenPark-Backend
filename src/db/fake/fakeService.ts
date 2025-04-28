import { Datos } from "../../types/db/auth";


const DATOS = [
    {
        usuario: "alejandra.m",
        contrasena:"verde123",
        token:"aceptado"
    },
    {
        usuario: "david.p",
        contrasena:"bosque456",
        token:"aceptado"
    },
    {
        usuario: "lucia.r",
        contrasena: "eco789",
        token:"aceptado"
    }
]

export class FakeService {
    async getToken(usuario: string, contrasena: string): Promise<Datos[]> {
        return DATOS;
    }
}
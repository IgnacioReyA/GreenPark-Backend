import { Datos } from "../../types/db/auth";

const DATOS: Datos[] = [
    {
        usuario: "alejandra.m",
        contrasena: "verde123",
        nombrecompleto: "Alejandra Morales",
        numerodeboleto: "00123"
    },
    {
        usuario: "david.p",
        contrasena: "bosque456",
        nombrecompleto: "David Pérez",
        numerodeboleto: "00124"
    },
    {
        usuario: "lucia.r",
        contrasena: "eco789",
        nombrecompleto: "Lucía Ramírez",
        numerodeboleto: "00125"
    }
];

export class FakeService {
    async getToken(usuario: string, contrasena: string): Promise<Datos[]> {
        return DATOS;
    }
}
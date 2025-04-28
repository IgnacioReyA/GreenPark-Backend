import { AuthController } from "../controller/authController";
import express, { Request, Response } from 'express';

export class AuthHandler {
    authController: AuthController;

    constructor(authController: AuthController) {
        this.authController = authController;
    }

    async getDatosUsuario(request: Request, response: Response) {
        try {
            // Extract `usuario` and `contrasena` from the request body
            const { usuario, contrasena } = request.body;
    
            // Use the extracted data
            const user = await this.authController.getAuth(usuario, contrasena);
    
            if (user) {
                response.json({
                    nombrecompleto: user.nombrecompleto,
                    numerodeboleto: user.numerodeboleto,
                });
            } else {
                response.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' });
        }
    }
}
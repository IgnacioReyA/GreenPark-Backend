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

            // Call the `getAuth` method with the extracted parameters
            const user = await this.authController.getAuth(usuario, contrasena);

            if (user) {
                // Return `nombrecompleto` and `numerodeboleto` in the response
                response.json({
                    nombrecompleto: user.nombrecompleto,
                    numerodeboleto: user.numerodeboleto,
                });
            } else {
                response.status(401).json({ error: 'Invalid credentials' }); // Return 401 for invalid credentials
            }
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' }); // Handle server errors
        }
    }
}
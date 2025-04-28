import { AuthController } from "../controller/authController";
import express, {Request, Response} from 'express'

export class AuthHandler {
    authController: AuthController;
    constructor (authController: AuthController){
        this.authController = authController;
    }

    async getDatosUsuario(request: Request, response: Response) {
        try {
            // Extract `usuario` and `contrasena` from the request body
            const { usuario, contrasena } = request.body;

            // Call the `getAuth` method with the extracted parameters
            const auth = await this.authController.getAuth(usuario, contrasena);

            if (auth) {
                response.json({ token: auth }); // Return the token if authentication is successful
            } else {
                response.status(401).json({ error: 'Invalid credentials' }); // Return 401 for invalid credentials
            }
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' }); // Handle server errors
        }
    }
}
import { AuthController } from "../controller/authController";
import { FakeService } from "../db/fake/fakeService";
import { AuthHandler } from "../handler/authHandler";
import express from "express";

const auth = express.Router();

const fakeService = new FakeService();
const authController = new AuthController(fakeService);
const authHandler = new AuthHandler(authController);

auth.get("/", authHandler.getDatosUsuario.bind(authHandler));

export default auth;
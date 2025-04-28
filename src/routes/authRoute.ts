import { AuthController } from "../controller/authController";
import { FakeService } from "../db/fake/fakeService";
import { AuthHandler } from "../handler/authHandler";
import cors from 'cors';
import express from "express";

const auth = express.Router();

auth.use(cors());

const fakeService = new FakeService();
const authController = new AuthController(fakeService);
const authHandler = new AuthHandler(authController);

auth.post("/", authHandler.getDatosUsuario.bind(authHandler));

export default auth;
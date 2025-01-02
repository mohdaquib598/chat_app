import { Router } from "express";
import { User } from "../controllers/../controllers/user.js";
const routes = Router();
routes.get("/authenticate", User.AuthenticateUser);
export default routes;

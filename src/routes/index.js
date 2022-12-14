import express from "express";
import UserController from "../controllers/users/UserController.js";
import passport from "passport";

const routes = express.Router();
routes
  .get("/", (req, res) =>
    res.json({ mensage: "Seja bem vindo a API da bolsa" })
  )
  .post("/user", UserController.store)
  .post("/user/auth", UserController.auth)
  .get("/user/:id", UserController.getUser);
export default routes;

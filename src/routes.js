import { Router } from "express";
import booksController from "./app/controllers/BooksController.js";

const routes = Router();

routes.get("/books", (req, res) => booksController.list(req, res));
routes.get("/books/:id", (req, res) => booksController.show(req, res));
routes.post("/books", (req, res) => booksController.create(req, res));
routes.put("/books/:id", (req, res) => booksController.update(req, res));
routes.delete("/books/:id", (req, res) => booksController.destroy(req, res));


export default routes;

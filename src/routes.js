import { Router } from "express";
import data from './data.js'

const routes = new Router();


routes.get("/books", (req, res) => {
  return res.json(data);
});



export default routes
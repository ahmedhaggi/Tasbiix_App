import express from "express";
import { createHabbits, deleteHabbits, getAllHabbits, updateHabbits } from "../controllers/habbitController.js";

const routes = express.Router();

routes.route('/').get(getAllHabbits).post(createHabbits)
routes.route('/:id').put(updateHabbits).delete(deleteHabbits)

export default routes
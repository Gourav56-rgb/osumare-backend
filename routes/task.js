import express from "express";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task.js";

const router = express.Router()

router.post("", createTask)
router.get("", getTasks)
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)

export default router

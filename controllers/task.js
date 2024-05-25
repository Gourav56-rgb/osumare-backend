import { v4 } from "uuid";

let tasks = [];

export const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: v4(), title, description };
  tasks.push(newTask);
  res.status(201).json({ message: "Task created successfully" });
};

export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

export const getTask = (req, res) => {
  const id = req.params.id;
  const taskFound = tasks.find((data) => data.id === id);
  if (!taskFound) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(taskFound);
};

export const updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks[taskIndex] = { ...tasks[taskIndex], title, description };
  res.status(200).json({ message: "Task updated successfully" });
};

export const deleteTask = (req, res) => {
  const id = req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks.splice(taskIndex, 1)[0];
  res.status(200).json({ message: "Task has been deleted" });
};

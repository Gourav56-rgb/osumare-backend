import express from "express";
import taskRoute from "./routes/task.js"

const server = express();

server.use(express.json());
  
server.use("/tasks", taskRoute)

server.listen(5000, () => {
  console.log("Server is running");
});

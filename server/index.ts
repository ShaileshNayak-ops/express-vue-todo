import { join } from "path";
import Express from "express";
import cors from "cors";
import {
  initialize,
  getTodosByUser,
  addTodo,
  registerUser,
  getUsers,
  deleteTodos,
} from "./db";
import { some } from "./utils";
const app = Express();
initialize();
app.use(cors());
app.use(Express.json());
const port: number = 5000;
let todos: Array<{ content: string | undefined; id: number }> = [];

app.get("/", (req: Express.Request, res: Express.Response) => {
  res.send("Todo Database for the project express-vue");
});

app.get("/getTodos", (req: Express.Request, res: Express.Response) => {
  res.json(getTodosByUser(req.query?.name));
});

app.get("/registerUser", (req, res) => {
  // const { name, password } = req.query;
  // console.log(password);
  registerUser(req.query?.name, req.query?.password);
  res.send(`Successfully created user ${req.query?.name}`);
});

app.get("/postTodos", (req, res) => {
  addTodo(req.query?.user, req.query.content?.toString());
  res.send(`Successfully Added Todo: ${req.query.content}`);
});
app.get("/deleteTodos", (req, res) => {
  deleteTodos(req.query?.id);
  res.send("done");
});
app.get("/hasUser", (req, res) => {
  const { name, password } = req.query;
  const users = getUsers();
  res.json({
    data: some(users, name, password),
  });
});
app.listen(port, () =>
  console.log("Server Started At port http://localhost:%s", port)
);

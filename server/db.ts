import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import uuid from "uuid";
let db: JsonDB;
let usersDB: JsonDB;
export function initialize() {
  db = new JsonDB(new Config("db/todos", true, true, "/"));
  usersDB = new JsonDB(new Config("db/users", true, true, "/"));
}
export function getTodos() {
  return db.getData("/todos");
}
export function registerUser(username: string | any, password: number | any) {
  usersDB.push("/users", [
    ...usersDB.getData("/users"),
    {
      username,
      password,
    },
  ]);
}
export function getUsers() {
  return usersDB.getData("/users");
}
export function deleteTodos(id: number | any) {
  const _todos: Array<{ content: string; user: string; _id: number }> =
    getTodos();
  const todos = _todos.filter((todo) => todo._id != id);
  db.push("/todos", todos);
}
export function getTodosByUser(user: string | any) {
  const todos: Array<{ content: string; user: string; _id: number }> =
    getTodos();
  return todos.filter((todo) => todo.user === user);
}
export function addTodo(user: string | any, content: string | undefined) {
  db.push("/todos", [
    ...getTodos(),
    {
      user,
      content,
      _id: Math.random(),
    },
  ]);
}

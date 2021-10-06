export function some(users: Array<object> | any, name: any, password: any) {
  if (users.some((e: any) => e.username == name && e.password == password)) {
    return true;
  } else {
    return false;
  }
}

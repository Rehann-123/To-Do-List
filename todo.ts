import inquirer from "inquirer";

let todolist: string[] = [];

let isrunning: boolean = true;

while (isrunning) {
  let todo = await inquirer.prompt([
    {
      name: "todo",
      type: "list",
      message: "Select What Do You Want To DO",
      choices: ["Add Todo", "View Todo", "Delete Todo", "Quit"],
    },
  ]);
  if (todo.todo === "Add Todo") {
    let Addtodo = await inquirer.prompt([
      {
        name: "Add",
        type: "input",
        message: "Add What You Want To Add In Your Todo List",
      },
    ]);
    todolist.push(Addtodo.Add);
    todolist.forEach((item, index) => {
      console.log(index + 1 + " " + item);
    });
  } else if (todo.todo === "View Todo") {
    todolist.forEach((item, index) => {
      console.log(index + 1 + " " + item);
    });
  } else if (todo.todo === "Delete Todo") {
    let Deletetodo = await inquirer.prompt([
      {
        name: "Delete",
        type: "number",
        message: "What Do You Want To Delete",
      },
    ]);
    todolist.splice(Deletetodo.Delete - 1, 1);
    todolist.forEach((item, index) => {
      console.log(index + 1 + " " + item);
    });
  } else if (todo.todo === "Quit") {
    isrunning = false;
  }
}

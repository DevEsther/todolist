
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
        console.log(`Added: "${task}" (Due: ${dueDate.toDateString()})`);
    }
 
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: "${todo.task}"`);
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
 
    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            console.log(`Removed: "${this.todos[index].task}"`);
            this.todos.splice(index, 1);
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
  
    listTodos() {
        if (this.todos.length === 0) {
            console.log("No todos found.");
            return;
        }
        console.log("\nTodo List:");
        this.todos.forEach(todo => {
            console.log(`[${todo.id}] ${todo.task} - ${todo.completed ? "✅ Completed" : "⏳ Pending"} (Due: ${todo.dueDate.toDateString()})`);
        });
    }

    filterTodos(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
 
    updateTodo(id, newTask) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
            console.log(`Updated: "${newTask}"`);
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("Cleared all completed todos.");
    }
}

const myTodoList = new TodoList();
myTodoList.addTodo("Learn TypeScript", new Date("2025-02-28"));
myTodoList.addTodo("Build a project", new Date("2025-08-28"));
myTodoList.listTodos();
myTodoList.completeTodo(1);
myTodoList.listTodos();
myTodoList.updateTodo(2, "Build an awesome project");
myTodoList.listTodos();
myTodoList.clearCompleted();
myTodoList.listTodos();

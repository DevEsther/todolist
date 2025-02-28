var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate,
        };
        this.todos.push(newTodo);
        console.log("Added: ".concat(task));
    };
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = true;
            console.log("Completed: ".concat(todo.task));
        }
        else {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            console.log("Removed: ".concat(this.todos[index].task));
            this.todos.splice(index, 1);
        }
        else {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.listTodos = function () {
        return this.todos;
    };
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoList.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.task = newTask;
            console.log("Updated: ".concat(todo.task));
        }
        else {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
        console.log("Cleared all completed todos.");
    };
    return TodoList;
}());

var myTodoList = new TodoList();
myTodoList.addTodo("Learn TypeScript", new Date("2025-02-28"));
myTodoList.addTodo("Build a project", new Date("2025-02-28"));
myTodoList.completeTodo(1);
console.log(myTodoList.listTodos());
myTodoList.removeTodo(2);
console.log(myTodoList.listTodos());

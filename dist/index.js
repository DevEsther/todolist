"use strict";
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
        console.log(`Added: ${task}`);
    }
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: ${todo.task}`);
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            console.log(`Removed: ${this.todos[index].task}`);
            this.todos.splice(index, 1);
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    listTodos() {
        return this.todos;
    }
    filterTodos(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
    updateTodo(id, newTask) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
            console.log(`Updated: ${todo.task}`);
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log(`Cleared all completed todos.`);
    }
}
// Example Usage
const myTodoList = new TodoList();
myTodoList.addTodo("Learn TypeScript", new Date("2024-07-01"));
myTodoList.addTodo("Build a project", new Date("2024-07-05"));
myTodoList.completeTodo(1);
console.log(myTodoList.listTodos());
myTodoList.removeTodo(2);
console.log(myTodoList.listTodos());

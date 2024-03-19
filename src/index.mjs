  class ToDoList {
    constructor () {
        this.ToDoList = [];
    };

    getTodos() {
        return this.ToDoList;
    };

    addTodo (todo) {
        this.ToDoList.push(todo);
    };

deleteTodo () {
    this.ToDoList.pop();
};



};

module.export = ToDoList;
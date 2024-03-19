const ToDoList = require("../../src/index.mjs");

describe("La clase ToDoList", () => {
  it("Debe ser una clase", () => {
    expect(typeof ToDoList.prototype.constructor).toBe("function");
  });
  it("debe tener implementado el metodo getTodos()", () => {
    const lista = new ToDoList();
    expect(lista.getTodos).toBeDefined();
  });
  it("debe tener implementado el metodo addTodo()", () => {
    const lista = new ToDoList();
    expect(lista.addTodo).toBeDefined();
  });

  it("Debe tener implemetado el método deleteTodo()", () => {
    const lista = new ToDoList();
    expect(lista.deleteTodo).toBeDefined();
  });

  it("el metodo getTodos debe retornar un array", () => {
    const lista = new ToDoList();
    expect(Array.isArray(lista.getTodos())).toBeTrue();
  });
  it("el metodo addTodo debe agregar un nuevo elemento", () => {
    const lista = new ToDoList();
    lista.addTodo("hacer la homework de la clase de hoy");
    expect(lista.getTodos()).toContain("hacer la homework de la clase de hoy");
  });
  it("el metodo deleteTodo debe eliminar la ultima tarea", () => {
    const lista = new ToDoList();
    lista.addTodo("A");
    lista.addTodo("B");
    lista.addTodo("C");
    lista.deleteTodo("");
    expect(lista.getTodos()).toContain("A");
    expect(lista.getTodos()).toContain("B");
    expect(lista.getTodos()).not.toContain("C");
  });
});

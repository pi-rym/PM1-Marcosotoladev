
// Repository sea una clase
// Deberia ser una instancia de la clase Repository
// Deberia tener metodo getAllActivities.
// Deberia tener metodo createActivity.
// Deberia tener metodo deleteActivity.

const { Activity, Repository } = require('../scripts/module.js'); 


let activity;
describe('Clase Activity', () => {
  beforeEach(() => {
    activity = new Activity();
  });
  it("Activity debe ser una clase", () => {
    expect(typeof Activity).toBe("function");
  });
})

let repository;

describe("Clase Repository", () => {
  beforeEach(() => {
    repository = new Repository();
  });

  it("Repository debe ser una clase", () => {
    expect(typeof Repository).toBe("function");
  });

  it("debe ser una instancia de la clase Repository", () => {
    expect(repository instanceof Repository).toBe(true);
  });

  it("debe tener el metodo getAllActivities", () => {
    expect(typeof repository.getAllActivities).toBe("function");
  });

  it("debe tener el metodo createActivity", () => {
    expect(typeof repository.createActivity).toBe("function");
  });

  it("debe tener el metodo deleteActivity", () => {
    expect(typeof repository.deleteActivity).toBe("function");
  });

});







/* describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
}); */

/* const sumar = (a, b) => a + b;

//tobe - toequal
describe("la funcion sumar", () => {
  it("debe estar definida", () => {
    expect(sumar).toBeDefined();
  });
  it("debe sumar dos numeros enviados como argumentos", () => {
    expect(sumar(2, 2)).toBe(4);
    expect(sumar(4, 4)).toBe(8);
    expect(sumar(5, 0)).toBe(5);
  });
}); */

/* const filtrar = (arr) => arr.filter((num) => num % 2 == 0);

describe("la funcion filtrar", () => {
  it("debe estar definida", () => {
    expect(filtrar).toBeDefined();
  });
  it("debe retornar un array", () => {
    expect(Array.isArray(filtrar([1, 2, 3, 4, 5, 6]))).toBe(true);
  });
  it("debe retornar un array de numeros pares", () => {
    expect(filtrar([1, 2, 3, 4])).toEqual([2, 4]);
    expect(filtrar([2, 4, 6])).toEqual([2, 4, 6]);
    expect(filtrar([1, 3, 5, 7])).toEqual([]);
    expect(filtrar([])).toEqual([]);
  });
}); */

/* 
describe("una prueba con objetos", () => {
  it("yo espero que dos numeros iguales sean iguales", () => {
    expect(5).toBe(5);
    expect(10).toBe(10);
  });
  it("yo espero que dos palabras iguales sean iguales", () => {
    expect("jorge").toBe("jorge");
    expect("alejo").toBe("alejo");
  });
  it("yo espero que dos objetos sean iguales", () => {
    expect({ nombre: "jorge" }).toEqual({ nombre: "jorge" });
  });
  it("espero que dos arrays sean iguales", () => {
    expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
  });
});
 */




/* 

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
}); */

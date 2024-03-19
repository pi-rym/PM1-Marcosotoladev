const Activity = require("../scripts/index");

describe("Activity", () => {
  it("Debería crear una actividad con las propiedades proporcionadas", () => {
    const activity = new Activity(1, "Title", "Description", "image.jpg");
    expect(activity.id).toBe(1);
    expect(activity.title).toBe("Title");
    expect(activity.description).toBe("Description");
    expect(activity.imgUrl).toBe("image.jpg");
  });
});

describe("Repository", () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it("Deberia crear una intancia", () => {
    expect(repository).toBeDefined();
  });

  it("Deberia agregar una nueva actividad a Repository", () => {
    repository.createActivity("Title", "Description", "image.jpg");
    const activities = repository.getAllActivities();
    expect(activities.length).toBe(1);
    expect(activities[0]).toBeInstanceOf(Activity);
    expect(activities[0].title).toBe("Title");
  });

  it("Debería eliminar una actividad del repositorio", () => {
    repository.createActivity("Title", "Description", "image.jpg");
    repository.createActivity(
      "Another Title",
      "Another Description",
      "image2.jpg"
    );
    const activities = repository.getAllActivities();
    const idToDelete = activities[0].id;
    repository.deleteActivity(idToDelete);
    const remainingActivities = repository.getAllActivities();
    expect(remainingActivities.length).toBe(1);
    expect(remainingActivities[0].id).not.toBe(idToDelete);
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


/* const ToDoList = require("../src/index.mjs");

describe("La clase ToDoList", () => {
  it("Debe ser una clase", () => {
    expect(typeof ToDoList.prototype.constructor).toBe("function");
  });
it('debe tener implementado el metodo getTodos()', () => {
  const lista = new ToDoList();
  expect(lista.getTodos).toBeDefined();
});
it('debe tener implementado el metodo addTodo()', () => {
  const lista = new ToDoList();
  expect(lista.addTodo).toBeDefined();
});

  it("Debe tener implemetado el método deleteTodo()", () => {
    const lista = new ToDoList();
    expect(lista.deleteTodo).toBeDefined();
  });

  it('el metodo getTodos debe retornar un array', () => {
    const lista = new ToDoList();
    expect(Array.isArray(lista.getTodos())).toBeTrue()
  });
it('el metodo addTodo debe agregar un nuevo elemento', () => {
  const lista = new ToDoList();
  lista.addTodo('hacer la homework de la clase de hoy');
  expect(lista.getTodos()).toContain('hacer la homework de la clase de hoy');
});
it('el metodo deleteTodo debe eliminar la ultima tarea', () => {
  const lista = new ToDoList();
  lista.addTodo('A');
  lista.addTodo('B');
  lista.addTodo('C');
  lista.deleteTodo('');
  expect(lista.getTodos()).toContain('A');
  expect(lista.getTodos()).toContain('B');
  expect(lista.getTodos()).not.toContain('C');
} );

});
 */
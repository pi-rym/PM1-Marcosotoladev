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

const filtrar = (arr) => arr.filter((num) => num % 2 == 0);

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
});

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

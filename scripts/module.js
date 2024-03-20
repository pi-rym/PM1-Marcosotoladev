// module.js

// Definición de la clase Activity que representa una actividad
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id; // Identificador único de la actividad
    this.title = title; // Título de la actividad
    this.description = description; // Descripción de la actividad
    this.imgUrl = imgUrl; // URL de la imagen asociada a la actividad
  }
}

// Definición de la clase Repository que gestiona las actividades
class Repository {
  constructor() {
    this.activities = []; // Lista de actividades almacenadas
    this.idGenerator = 0; // Generador de identificadores únicos para las actividades
  }

  // Método para crear una nueva actividad
  createActivity(title, description, imgUrl) {
    const id = this.idGenerator++; // Generamos un nuevo identificador único
    const activity = new Activity(id, title, description, imgUrl); // Creamos una nueva instancia de Activity
    this.activities.push(activity); // Añadimos la actividad a la lista
  }

  // Método para obtener todas las actividades almacenadas
  getAllActivities() {
    return this.activities; // Retornamos la lista completa de actividades
  }

  // Método para eliminar una actividad por su id
  deleteActivity(id) {
    // Confirmamos la acción con el usuario antes de eliminar la actividad
    if (window.confirm("¿Estás seguro de que quieres eliminar esta actividad?")) {
      this.activities = this.activities.filter((activity) => activity.id !== id); // Filtramos las actividades para excluir la actividad con el id dado
    }
  }
}

// Exportamos las clases Activity y Repository si el entorno es Node.js
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { Activity, Repository };
}


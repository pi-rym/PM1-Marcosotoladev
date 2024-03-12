// Definición de la clase Activity para representar una actividad
class Activity {
    constructor(id, title, description, imgUrl) {
      this.id = id; // Identificador único de la actividad
      this.title = title; // Título de la actividad
      this.description = description; // Descripción de la actividad
      this.imgUrl = imgUrl; // URL de la imagen asociada a la actividad
    }
  }
  
  // Definición de la clase Repository para gestionar las actividades
  class Repository {
    constructor() {
      this.activities = []; // Arreglo para almacenar las actividades
      this.idGenerator = 0; // Generador de identificadores únicos para las actividades
    }
  
    // Método para obtener todas las actividades almacenadas
    getAllActivities() {
      return this.activities;
    }
  
    // Método para crear una nueva actividad
    createActivity(title, description, imgUrl) {
      const id = this.idGenerator++; // Generar un nuevo identificador único
      const activity = new Activity(id, title, description, imgUrl); // Crear la actividad
      this.activities.push(activity); // Agregar la actividad al arreglo
    }
  
    // Método para eliminar una actividad dado su id
    deleteActivity(id) {
      this.activities = this.activities.filter((activity) => activity.id !== id); // Filtrar las actividades, excluyendo la actividad con el id dado
    }
  }
  
  // Crear una instancia de la clase Repository para gestionar las actividades
  const repository = new Repository();
  
  // Agregar un event listener para el formulario de creación de actividades
  document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    
    // Obtener los valores del formulario
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imgUrl = document.getElementById("imgUrl").value;
  
    // Crear una nueva actividad con los valores del formulario
    repository.createActivity(title, description, imgUrl);
  
    // Mostrar las actividades actualizadas después de agregar la nueva actividad
    mostrarActividades(repository.getAllActivities());
  
    // Limpiar los campos del formulario
    limpiarCampos();
  });
  
  // Función para mostrar las actividades en el contenedor
  function mostrarActividades(actividades) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // Limpiar el contenido del contenedor
  
    // Iterar sobre todas las actividades y mostrar cada una
    actividades.forEach((actividad) => {
      mostrarActividad(actividad);
    });
  }
  
  // Función para mostrar una actividad específica
  function mostrarActividad(actividad) {
    const card = document.createElement("div"); // Crear un nuevo elemento div para representar la actividad
    card.classList.add("card"); // Agregar la clase "card" al elemento div
  
    // Agregar un event listener para eliminar la actividad al hacer clic en la tarjeta
    card.addEventListener("click", function () {
      // Mostrar una confirmación al usuario antes de eliminar la tarjeta
      const confirmacion = confirm("¿Estás seguro de que quieres eliminar esta actividad?");
      if (confirmacion) {
        repository.deleteActivity(actividad.id); // Eliminar la actividad del repositorio
        this.remove(); // Eliminar la tarjeta del DOM
      }
    });
  
    // Crear elementos para mostrar el título, la imagen y la descripción de la actividad
    const titulo = document.createElement("h3");
    titulo.textContent = actividad.title;
    card.appendChild(titulo);
  
    const imagen = document.createElement("img");
    imagen.src = actividad.imgUrl;
    card.appendChild(imagen);
  
    const description = document.createElement("p");
    description.textContent = actividad.description;
    card.appendChild(description);
  
    // Agregar la tarjeta al contenedor
    const contenedor = document.getElementById("contenedor");
    contenedor.appendChild(card);
  }
  
  // Función para limpiar los campos del formulario
  function limpiarCampos() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("imgUrl").value = "";
  }

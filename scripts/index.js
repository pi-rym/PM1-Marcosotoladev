// Definición de la clase Activity
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Definición de la clase Repository
class Repository {
  constructor() {
    this.activities = []; // Lista de actividades
    this.idGenerator = 0; // Generador de IDs para las actividades
  }

  // Método para crear una nueva actividad
  createActivity(title, description, imgUrl) {
    const id = this.idGenerator++; // Generar un nuevo ID
    const activity = new Activity(id, title, description, imgUrl); // Crear una nueva instancia de Activity
    this.activities.push(activity); // Agregar la actividad a la lista
  }

  // Método para obtener todas las actividades
  getAllActivities() {
    return this.activities;
  }

  // Método para eliminar una actividad por su ID
  deleteActivity(id) {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar esta actividad?")      // Confirmar la eliminación con el usuario
    ) {


      this.activities = this.activities.filter( // Filtrar la lista de actividades para excluir la actividad con el ID proporcionado
        (activity) => activity.id !== id
      );
    }
  }
}

// Crear una instancia de Repository
const repository = new Repository();


// Función para convertir las actividades en elementos HTML y mostrarlas en la página
function convertToElementsHTML() {
  const container = document.getElementById("container"); // Obtener el contenedor donde se mostrarán las actividades
  container.innerHTML = ""; // Limpiar el contenido actual del contenedor


  const activities = repository.getAllActivities(); // Obtener todas las actividades del repositorio

  // Convertir cada actividad en un elemento HTML y asignar un evento de clic para eliminarla
  const elementsHTML = activities.map((activity) => {
    const elementHTML = convertToElementHTML(activity); // Convertir la actividad en un elemento HTML
    // Asignar un evento de clic para eliminar la actividad al hacer clic en el elemento
    elementHTML.addEventListener("click", () => {
      repository.deleteActivity(activity.id); // Eliminar la actividad del repositorio
      convertToElementsHTML(); // Volver a mostrar las actividades actualizadas
    });
    return elementHTML;
  });

  // Agregar los elementos HTML al contenedor
  elementsHTML.forEach((element) => {
    container.appendChild(element);
  });
}

// Función para convertir una actividad en un elemento HTML
function convertToElementHTML(activityInstance) {
  const { title, description, imgUrl } = activityInstance; // Desestructurar la instancia de actividad

  // Crear elementos HTML para el título, la imagen y la descripción de la actividad
  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;

  const imgElement = document.createElement("img");
  imgElement.src = imgUrl;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;

  // Crear un contenedor div para la actividad y agregar los elementos HTML
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.appendChild(titleElement);
  cardElement.appendChild(imgElement);
  cardElement.appendChild(descriptionElement);

  return cardElement; // Devolver el elemento HTML de la actividad
}

// Función para agregar una nueva actividad desde un formulario
function addActivity(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
  // Obtener los valores del formulario
  const inputTitle = document.getElementById("title").value;
  const inputDescription = document.getElementById("description").value;
  const inputImgUrl = document.getElementById("imgUrl").value;

  // Verificar si se completaron todos los campos del formulario
  if (!inputTitle || !inputDescription || !inputImgUrl) {
    alert("Por favor complete todos los campos."); // Mostrar un mensaje de alerta si faltan campos
    return;
  }

  // Crear una nueva actividad y agregarla al repositorio
  repository.createActivity(inputTitle, inputDescription, inputImgUrl);
  convertToElementsHTML(); // Mostrar las actividades actualizadas en la página

  // Limpiar los campos del formulario después de agregar la actividad
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imgUrl").value = "";
}

// Asignar un evento de clic al botón de "Agregar Actividad" para llamar a la función addActivity
document
  .getElementById("agregar-actividad-btn")
  .addEventListener("click", addActivity);

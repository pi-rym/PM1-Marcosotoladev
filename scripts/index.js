
// Instanciamos un objeto de Repository
const repository = new Repository();

// Función para convertir las actividades en elementos HTML y mostrarlos en el contenedor
function convertToElementsHTML() {
  // Obtenemos el contenedor
  const container = document.getElementById("container");
  container.innerHTML = ""; // Limpiamos el contenido previo del contenedor

  // Obtenemos todas las actividades del repositorio
  const activities = repository.getAllActivities();

  // Convertimos cada actividad en un elemento HTML
  const elementsHTML = activities.map((activity) => {
    const elementHTML = convertToElementHTML(activity);

    // Agregamos un listener para borrar la actividad al hacer clic en el elemento
    elementHTML.addEventListener("click", () => {
      repository.deleteActivity(activity.id);
      convertToElementsHTML(); // Volvemos a generar los elementos HTML después de borrar la actividad
    });

    return elementHTML;
  });

  // Agregamos los elementos HTML al contenedor
  elementsHTML.forEach((element) => {
    container.appendChild(element);
  });
}

// Función para convertir una actividad en un elemento HTML
function convertToElementHTML(activityInstance) {
  const { title, description, imgUrl } = activityInstance;

  // Creamos elementos HTML para el título, la imagen y la descripción
  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;

  const imgElement = document.createElement("img");
  imgElement.src = imgUrl;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;

  // Creamos un contenedor para agrupar los elementos
  const cardElement = document.createElement("div");
  cardElement.classList.add("card"); // Agregamos una clase CSS para estilizar el contenedor
  cardElement.appendChild(titleElement);
  cardElement.appendChild(imgElement);
  cardElement.appendChild(descriptionElement);

  return cardElement; // Retornamos el contenedor con los elementos
}

// Función para agregar una nueva actividad
function addActivity(event) {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del formulario

  // Obtenemos los valores de los campos del formulario
  const inputTitle = document.getElementById("title").value;
  const inputDescription = document.getElementById("description").value;
  const inputImgUrl = document.getElementById("imgUrl").value;

  // Verificamos si todos los campos están completos
  if (!inputTitle || !inputDescription || !inputImgUrl) {
    alert("Por favor complete todos los campos.");
    return;
  }

  // Creamos una nueva actividad en el repositorio
  repository.createActivity(inputTitle, inputDescription, inputImgUrl);

  // Actualizamos la visualización de las actividades
  convertToElementsHTML();

  // Limpiamos los campos del formulario
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imgUrl").value = "";
}

// Agregamos un listener al botón de agregar actividad para llamar a la función addActivity
document
  .getElementById("agregar-actividad-btn")
  .addEventListener("click", addActivity);

// Llamamos a convertToElementsHTML para mostrar las actividades al cargar la página
convertToElementsHTML();



// index.js

// Definición de la clase Activity y Repository ya no es necesaria aquí

const repository = new Repository();

function convertToElementsHTML() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const activities = repository.getAllActivities();

  const elementsHTML = activities.map((activity) => {
    const elementHTML = convertToElementHTML(activity);
    elementHTML.addEventListener("click", () => {
      repository.deleteActivity(activity.id);
      convertToElementsHTML();
    });
    return elementHTML;
  });

  elementsHTML.forEach((element) => {
    container.appendChild(element);
  });
}

function convertToElementHTML(activityInstance) {
  const { title, description, imgUrl } = activityInstance;

  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;

  const imgElement = document.createElement("img");
  imgElement.src = imgUrl;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.appendChild(titleElement);
  cardElement.appendChild(imgElement);
  cardElement.appendChild(descriptionElement);

  return cardElement;
}

function addActivity(event) {
  event.preventDefault();

  const inputTitle = document.getElementById("title").value;
  const inputDescription = document.getElementById("description").value;
  const inputImgUrl = document.getElementById("imgUrl").value;

  if (!inputTitle || !inputDescription || !inputImgUrl) {
    alert("Por favor complete todos los campos.");
    return;
  }

  repository.createActivity(inputTitle, inputDescription, inputImgUrl);
  convertToElementsHTML();

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imgUrl").value = "";
}

document
  .getElementById("agregar-actividad-btn")
  .addEventListener("click", addActivity);

// Llamar a convertToElementsHTML para mostrar las actividades al cargar la página
convertToElementsHTML();


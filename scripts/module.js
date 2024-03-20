// module.js
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.idGenerator = 0;
  }

  createActivity(title, description, imgUrl) {
    const id = this.idGenerator++;
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  getAllActivities() {
    return this.activities;
  }

  deleteActivity(id) {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar esta actividad?")
    ) {
      this.activities = this.activities.filter(
        (activity) => activity.id !== id
      );
    }
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { Activity, Repository };
}

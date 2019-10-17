class Project {
  constructor() {
    this.data = [];
  }

  create(id, title) {
    this.data.push({
      id,
      title,
      tasks: []
    });
    return this.data[this.data.length - 1];
  };

  find(id) {
    if (id) {
      return this.data.filter(project => (project.id === id));
    } else {
      return this.data;
    }
  };

  deleteAt(id) {
    const index = this.data.findIndex(project => project.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  };

  editAt(id, { title, tasks }) {
    const index = this.data.findIndex(project => project.id === id);
    if (index !== -1) {
      if (title) {
        this.data[index].title = title;
      }
      if (tasks) {
        this.data[index].tasks.push(tasks);
      }
      return this.data[index];
    }
  };
};

module.exports = new Project();
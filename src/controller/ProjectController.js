const Project = require('../model/Project');

module.exports = {
  index(req, res) {
    return res.json(Project.find());
  },

  store(req, res) {
    const { id, title } = req.body;

    const project = Project.create(id, title);
    return res.json(project);
  },

  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const project = Project.editAt(id, { title });
    return res.json(project);
  },

  destroy(req, res) {
    const { id } = req.params;
    Project.deleteAt(id);
    return res.send();
  }
};
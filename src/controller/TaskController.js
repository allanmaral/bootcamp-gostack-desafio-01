const Project = require('../model/Project');

module.exports = {
  store(req, res) {
    const { id } = req.params;
    const { tasks } = req.body;
    const project = Project.editAt(id, { tasks });
    return res.json(project);
  }
}
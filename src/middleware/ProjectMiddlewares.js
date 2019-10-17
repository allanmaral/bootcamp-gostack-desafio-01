const Project = require('../model/Project');

let counter = 0;

module.exports = {
  checkIdParam(req, res, next) {
    if (Project.find(req.params.id).length === 0) {
      return res.status(400).json({ error: "Project id does not exist." });
    }
    return next();
  },

  requisitionCounter(req, res, next) {
    console.log(`Foram feitas ${++counter} requisições até o momento.`);
    return next();
  }
}
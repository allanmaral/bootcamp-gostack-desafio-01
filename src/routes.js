const express = require('express');

const ProjectController = require('./controller/ProjectController');

const routes = express.Router();

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.destroy);

module.exports = routes;
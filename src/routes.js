const express = require('express');

const ProjectController = require('./controller/ProjectController');
const TaskController = require('./controller/TaskController');

const routes = express.Router();

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.destroy);

routes.post('/projects/:id/tasks', TaskController.store);

module.exports = routes;
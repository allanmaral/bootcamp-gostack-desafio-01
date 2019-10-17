const express = require('express');

const ProjectController = require('./controller/ProjectController');
const TaskController = require('./controller/TaskController');
const { checkIdParam, requisitionCounter } = require('./middleware/ProjectMiddlewares');

const routes = express.Router();

routes.use(requisitionCounter);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:id', checkIdParam, ProjectController.update);
routes.delete('/projects/:id', checkIdParam, ProjectController.destroy);

routes.post('/projects/:id/tasks', checkIdParam, TaskController.store);

module.exports = routes;
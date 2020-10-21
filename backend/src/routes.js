const express = require('express');
const MovieController = require ('./controllers/MovieController');

const routes = express.Router();


routes.get('/', MovieController.Show);
routes.post('/', MovieController.Show);


module.exports = routes;
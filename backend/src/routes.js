const express = require('express');
const MovieController = require ('./controllers/MovieController');
const CardController = require ('./controllers/CardController');

const routes = express.Router();

routes.get('/', MovieController.Show);
routes.get('/movie', CardController.Show);

module.exports = routes;
const express = require('express');
const MovieController = require ('./controllers/MovieController');

const routes = express.Router();


routes.get('/', MovieController.Show);


module.exports = routes;
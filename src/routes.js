const {Router} = require("express");

const routes = new Router();

routes.get('/', (req, res) => {

    return res.json({message: 'Olá Adriana'})
});

module.exports = routes;
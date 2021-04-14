const express = require('express');
const routes = require('./routes');

class App{
    constructor() {
        this.server = express();

        this.middlewares();

        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            return next();
        });

        this.server.use(routes);
    }
}

module.exports = new App().server;
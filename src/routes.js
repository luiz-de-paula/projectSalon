import {Router} from 'express';
import UserController from './app/controllers/UserController';
// import User from './app/models/User';


const routes = new Router();

// routes.get('/', async(req, res) => {

//   const user = await User.create({
//     name: 'Luiz Hnerique',
//     email: 'eletronica.do.lui@gmail.com',
//     password_hash: '123',
//   });





routes.post('/users', UserController.store);
// return res.json(user);
// });

export default routes;

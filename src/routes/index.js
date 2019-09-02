import express from 'express';
import registryRouter from './registryRoutes';

const Router = express.Router();

Router.get('/', (req, res) => {
  res.status(301).redirect('/api');
})

Router.use('/api', registryRouter)

export default Router;
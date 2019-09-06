import express from 'express';
import listRouter from './listRoutes';

const Router = express.Router();

Router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome, add your wish'
  });
})

Router.use('/api/wishes', listRouter)

export default Router;
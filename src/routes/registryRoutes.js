import express from 'express';

const registryRouter = express.Router();

registryRouter.get('/', (req, res) => {
  res.send({
    message: 'Welcome to our school'
  })
})

export default registryRouter;
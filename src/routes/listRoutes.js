import express from 'express';

const listRouter = express.Router();

listRouter.get('/', (req, res) => {
  res.send({
    message: 'Shop'
  })
})

export default listRouter;
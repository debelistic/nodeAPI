import express from 'express';
import { config } from 'dotenv';
import routes from './routes';

config();

const app = express();
app.use(routes);

app.use((req, res, next) => {
  const error = new Error('Your request could not be found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const { message } = error;
  res.status(error.status || 500).send({
    message,
  });
});


export default app;

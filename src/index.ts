import config from './config/config';
import express from 'express';
import appRouter from './router';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
const port = config.port;

app.use('/', appRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleWares/globalErrorHandlers';
import notFound from './app/middleWares/notFound';
import router from './app/routes';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

//global error handler
app.use(globalErrorHandler);

//Route not found
app.use(notFound);

export default app;

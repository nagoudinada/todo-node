require('dotenv').config();
import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

const app: Express = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/', routes);

// Server
mongoose.connect(process.env.MONGO_URI!).then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

export { app };

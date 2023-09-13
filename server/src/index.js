import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';

import routes from './routes/index.js';

dotenv.config();
const app = express();
const { PORT, MONGO_URL } = process.env;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/api', routes);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`=================================`);
      console.log(`Connection to database successful`);
      console.log(`Server running on port: ${PORT}`);
      console.log(`=================================`);
    });
  })
  .catch(() => {
    console.log(`=================================`);
    console.log(`Could not connect to database`);
    console.log(`due to error:\n${error}`);
    console.log(`=================================`);
  });

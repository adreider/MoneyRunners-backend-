import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import busboy from 'connect-busboy';
import busboyBodyParser from 'busboy-body-parser';

import userRoutes from './routes/user.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(busboy());
app.use(busboyBodyParser());
app.use(cors());

app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log("Server is Running")
})
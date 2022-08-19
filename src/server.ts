import express from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.listen(5000);
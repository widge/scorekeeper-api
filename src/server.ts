import * as dotEnv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
// eslint-ignore-next-line
dotEnv.config();
import participants from './db/participants';

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
console.log(process.env.NODE_ENV);
app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'OK!' });
});

app.get('/test', async (req: Request, res: Response) => {
  const data = await participants.getAll();
  res.json(data);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  return console.log(`Listening at http://localhost:${port}`);
});

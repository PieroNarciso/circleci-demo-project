import express from 'express';
import { add } from './lib';

const app = express();

const PORT = 8080;

app.get('/', (_, res) => {
  return res.send({ message: 'Hello World!' });
});

app.get('/another', (_, res) => {
  const value = add(1, 3);
  return res.send({ message: value });
});

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});

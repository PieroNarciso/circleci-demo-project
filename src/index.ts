import express from 'express';

const app = express();

const PORT = 8080

app.get('/', (_, res) => {
  return res.send({ message: 'hello world!'});
});

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});

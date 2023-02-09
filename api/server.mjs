import express, { static as expressStatic } from 'express';

const app = express();
const port = 3000;

app.use(expressStatic('res'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});

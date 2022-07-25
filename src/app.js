import express from 'express';

import path from 'path';

const DEFAULT_PORT = 3333;
const STATIC_DIR = path.resolve('dist/');

const app = express();
app.use(express.static(STATIC_DIR));

app.listen(DEFAULT_PORT, () => {
  console.info(`App start on PORT ${DEFAULT_PORT}`);
});

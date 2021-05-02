const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ status: 'OK!' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  return console.log(`Example app listening at http://localhost:${port}`);
});

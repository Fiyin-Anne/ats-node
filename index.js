const express = require('express');
const app = express();
const companyRouter = require('./src/handlers/company')
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';

app.use(express.json());

app.get('/', function (req, res) {
  res
  .status(200)
  .json({
    message: "Welcome."
  })
})

app.use('/api/company', companyRouter)

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
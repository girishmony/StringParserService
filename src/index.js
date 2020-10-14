const express = require('express')
const app = express()
const port = 3000

let stringParserRoute = require('./routes/stringParserRoute');


app.use(express.json());

app.use('/api',stringParserRoute);

app.listen(port, () => {
  console.log(`String Parser service listening at http://localhost:${port}`)
})
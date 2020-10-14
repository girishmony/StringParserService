const express = require('express')
const app = express()
const port = 3000

let stringParserRoute = require('./routes/stringParserRoute');


app.use(express.json());

app.use('/api',stringParserRoute);

app.listen(port, () => {
  console.log(`Fiserv app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()

app.use(express.json())
app.use(require('cors')())


// DATABASE SETUP
require('./db/mongoose');


// ROUTES
app.use('/api', require('./routes/courses'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
  console.log(`Spinning up server on port ${PORT}`);
})
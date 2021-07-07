const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(require('cors')())


// DATABASE SETUP
require('./db/mongoose');


// ROUTES
app.use('/api', require('./routes/courses'))

// Serve Frontend
app.use(express.static(path.join(__dirname, '../../Frontend/build')));


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
  console.log(`Spinning up server on port ${PORT}`);
})
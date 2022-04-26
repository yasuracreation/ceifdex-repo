const express = require('express');
const cors = require('cors');
const movieRoute = require('./routes/movies_route')


app = express();
app.use(cors())

app.use('/api/movies',movieRoute);

app.listen('3000',()=>console.log('listning from port 3000'));
const express = require('express');
const app = express();
const PORT = 3000;

const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');

app.use('/shelters', shelterRoutes)
app.use('/dogs', dogRoutes)

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})
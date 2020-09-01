const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

const port = 5000;
app.listen(port, () => {
    console.log(`${port} port is Running`)
})
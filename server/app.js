const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;


app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/api', (req, res) => {
    res.json({'name': '정민지', 'age': 19, 'school': 'mirim'});
})

app.listen(port, () => {
    console.log(`${port} port is Running`)
})
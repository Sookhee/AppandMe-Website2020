const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

const adminonlyRoute = require('./routes/adminonly');
const applyRoute = require('./routes/apply');
const mypageRoute = require('./routes/mypage');
const faqRoute = require('./routes/faq');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

app.use('/api/adminonly', adminonlyRoute);
app.use('/api/apply', applyRoute);
app.use('/api/mypage', mypageRoute);
app.use('/api/faq', faqRoute);

app.listen(process.env.PORT || port, () => {
    console.log(`${port} port is Running`)
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 5000;

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'passwd',
    database : 'test'
});

connection.connect();
if(connection){console.log('DB CONNECTED :)')}
else{console.log('DB FALSE :(')}

let sql = {
    list: 'select * from apply',
    select: 'select * from apply where uid=?',
    insert: 'insert into apply (uid, name, passwd, q1, q2, q3) values(?, ?, ?, ?, ?, ?)'
}

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());


app.post('/api/apply', (req, res) => {
    const _uid = req.body.uid;
    const _name = req.body.name;
    const _passwd = req.body.passwd;
    const _q1 = req.body.q1;
    const _q2 = req.body.q2;    
    const _q3 = req.body.q3;

    console.log(req.body);

    connection.query(sql.insert, [_uid, _name, _passwd, _q1, _q2, _q3], (err, result) => {
        if(err){
            console.log(err);
            res.json({success: false, message: '신청서 제출에 실패하였습니다.'});
        }
        else{
            console.log('INSERTED!');
            res.json({success: true});
        }
    })
})

app.listen(port, () => {
    console.log(`${port} port is Running`)
})
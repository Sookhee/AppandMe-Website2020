const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

const adminonlyRoute = require('./routes/adminonly');
const applyRoute = require('./routes/apply');
const confirmRoute = require('./routes/confirm');
const faqRoute = require('./routes/faq');

// let sql = {
//     list: 'select * from apply',
//     select_uid: 'select * from apply where uid=?',
//     select_name: "select * from apply where name like CONCAT('%', ?,  '%')",
//     insert: 'insert into apply (uid, name, passwd, q1, q2, q3) values(?, ?, ?, ?, ?, ?)',
//     update: 'update apply set q1=?, q2=?, q3=? where uid=?'
// }

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

app.use('/api/adminonly', adminonlyRoute);
app.use('/api/apply', applyRoute);
app.use('/api/confirm', confirmRoute);
app.use('/api/faq', faqRoute);

app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/api/edit', (req, res) => {
    const _uid = req.body.uid;
    const _q1 = req.body.q1;
    const _q2 = req.body.q2;    
    const _q3 = req.body.q3;

    connection.query(sql.update, [_q1, _q2, _q3, _uid], (err, result) => {
        if(err){
            console.log(err);
            return;
        } else{
            console.log('UPDATED!');
            res.json({success: true})
        }
    })
})

// 지원서 찾기 (학번_uid) : 신입생
app.post('/api/confirm', (req, res) => {
    const _uid = req.body.uid;
    const _passwd = req.body.passwd;

    connection.query(sql.select_uid, [_uid], (err, result) => {
        if(err){
            console.log(err);
            res.json({success: false, message: '문제가 발생하였습니다. 앱앤미 페이스북 페이지를 통해 문의해주세요'});
        } else{
            console.log('SELECTED!');
            if(result.length < 1){
                res.json({success: false, message: '지원서를 찾을 수 없습니다\n앱앤미 페이스북을 이용해서 문의해주세요'});
            } else{
                if(result[0].passwd === _passwd){
                    res.json({success: true, data: result[0]});
                } else{
                    res.json({success: false, message: '비밀번호가 일치하지 않습니다'});
                }
            }
        }
    })
})

app.post('/api/edit/:id', (req, res) => {
    const _id = req.params.id;
    const _q1 = req.body.q1;
    const _q2 = req.body.q2;
    const _q3 = req.body.q3;

    connection.query(sql.update, [_q1, _q2, _q3, _id], (err, result) => {
        if(err){
            console.log(err);
            res.join({success: false, message: '지원서 수정에 실패했습니다'});
        } else{
            console.log('UPDATED!');
            res.json({success: true});
        }
    })
})

app.listen(port, () => {
    console.log(`${port} port is Running`)
})
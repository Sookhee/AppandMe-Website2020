const express = require('express');
const connection = require('../db/db_conn');
const router = express.Router();
const sql = require('../db/sql');

router.post('/', (req, res) => {
    const _uid = req.body.uid;
    const _name = req.body.name;
    const _passwd = req.body.passwd;
    const _q1 = req.body.q1;
    const _q2 = req.body.q2;    
    const _q3 = req.body.q3;
    const _tel = req.body.tel;

    connection.query(sql.apply.select_by_uid, [_uid], (err, result) => {
        if(err){ res.json({success: false, err: err}); }
        else{
            if(result.length > 0){ res.json({success: false, message: '이미 제출한 지원서가 있습니다.'}); }
            else{
                connection.query(sql.apply.insert, [_uid, _name, _passwd, _q1, _q2, _q3, _tel], (err, result) => {
                    if(err){ res.json({success: false, message: '신청서 제출에 실패했습니다. '}); }
                    else{ res.json({success: true}); }
                })
            }
        }
    })
})

module.exports = router;
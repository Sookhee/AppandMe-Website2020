const express = require('express');
const router = express.Router();
const connection = require('../db/db_conn');
const sql = require('../db/sql');

router.post('/check', (req, res) => {
    const _uid = req.body.uid;
    const _passwd = req.body.passwd;

    connection.query(sql.mypage.select_by_uid, [_uid], (err, result) => {
        if(err || result.length < 1){ res.json({success: false, err: err, message: '학번과 일치하는 지원서를 찾을 수 없습니다.\n이미 지원서를 제출하셨다면 앱앤미 페이스북 메신저를 통해 문의해주세요.'}); }
        else{
            if(result[0].passwd === _passwd){ res.json({success: true, data: result[0]}); }
            else{ res.json({success: false, message: '비밀번호가 일치하지 않습니다.'}); }
        }
    })
})

router.post('/edit', (req, res) => {
    const _uid = req.body.uid;
    const _q1 = req.body.q1;
    const _q2 = req.body.q2;
    const _q3 = req.body.q3;
    const _tel = req.body.tel;

    connection.query(sql.mypage.update, [_q1, _q2, _q3, _tel, _uid], (err, result) => {
        if(err){ res.json({success: false, err: err, message: '지원서 수정에 실패했습니다.'}); }
        else{ res.json({success: true, message: '수정된 지원서가 접수되었습니다.'}); }
    })
})

module.exports = router;
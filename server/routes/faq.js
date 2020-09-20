const express = require('express');
const router = express.Router();
const connection = require('../db/db_conn');
const sql = require('../db/sql');

router.get('/', (req, res) => {
    connection.query(sql.faq.select_all, [], (err, result) => {
        if(err){ res.json({success: false, err: err}); }
        else{ res.json({success: true, data: result}); }
    })
})

router.post('/', (req, res) => {
    const _question = req.body.question;
    const _answer = req.body.answer;

    connection.query(sql.faq.insert_faq, [_question, _answer], (err, result) => {
        if(err){ res.json({success: false, err: err, message: 'FAQ 등록 실패...'}); }
        else{ res.json({success: true, message: 'FAQ 등록 성공!'}) }
    })
})

module.exports = router;
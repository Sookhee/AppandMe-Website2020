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

module.exports = router;
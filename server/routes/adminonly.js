const express = require('express');
const router = express.Router();
const connection = require('../db/db_conn');
const sql = require('../db/sql');

router.get('/', (req, res) => {
    connection.query(sql.adminonly.select_all, [], (err, result) => {
        if(err){ res.json({success: false, err: err}); }
        else{ res.json({success: true, data: result}); }
    })
})

router.post('/', (req, res) => {
    const _name = req.body.name;
    
    connection.query(sql.adminonly.select_by_name, [_name], (err, result) => {
        if(err){ res.json({success: false, err: err}); }
        else{ res.json({success: true, data: result}); }
    })
})

module.exports = router;
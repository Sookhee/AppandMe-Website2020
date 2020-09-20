let sql = {
    adminonly: {
        select_all: `select * from appandme_apply`,
        select_by_name: `select * from appandme_apply where name like CONCAT('%', ?,  '%')`    },
    apply: {
        select_by_uid: `select * from appandme_apply where uid = ?`,
        insert: `insert into appandme_apply(uid, name, passwd, q1, q2, q3, tel) value(?, ?, ?, ?, ?, ?, ?)`
    },
    faq: {
        select_all: `select * from appandme_faq`,
        insert_faq: `insert into appandme_faq(question, answer) value(?, ?)`
    },
    mypage: {
        select_by_uid: `select * from appandme_apply where uid = ?`,
        update: `update appandme_apply set q1=?, q2=?, q3=?, tel=? where uid=?`
    }
}

module.exports = sql;
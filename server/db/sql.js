let sql = {
    adminonly: {
        select_all: `select * from apply`,
        select_by_name: `select * from apply where name like CONCAT('%', ?,  '%')`
    }
}

module.exports = sql;
var mysqlPassword = require('mysql-password');

var db = require('./db');

exports.auth = function(email, password, callback) {
    db.pool.getConnection(function(err, conn) {
        if (err) callback(err);
        else {
            var sql = 'SELECT no, email, name FROM test.user WHERE email = ? and password = ? and status = 1';
            var hashPass = mysqlPassword(password);
            conn.query(sql, [email, hashPass], function(err, rows) {
                if (err) callback(err);
                else {
                    if (rows.length == 0)
                        callback(new Error('not exist rows'));
                    else {
                        callback(null, rows[0]);
                    }
                }
                conn.release();
            });
        }
    });
}
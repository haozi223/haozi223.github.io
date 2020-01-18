const { MongoClient } = require('mongodb');

//mysql池连接必写
const pool = require('mysql').createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: '作业',
    multipleStatements: true
})

//mongodb数据库连接必写
const url = 'mongodb://localhost:27017';
const DBname = '饿了么';


module.exports = {
    //mongodb
    dbconnect (sheet, callback) {
        return new Promise((resolve) => {
            MongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
                try {
                    resolve(await callback(err, client.db(DBname).collection(sheet)))
                    client.close()
                } catch (error) {
                    console.log(error)
                }
            });
        })
    },
    //sql
    sqlquery (sql, condition, callback) {
        return new Promise((res, rej) => {
            pool.getConnection((err, cond) => {
                if (err) rej({ state: 0, err })
                cond.query(sql, condition ? condition : [], (err, result) => {
                    cond.release();
                    if (err) rej({ state: 0, err })
                    res({ state: 1, data: callback ? callback(result) : result });
                })
            })
        })
    }
}
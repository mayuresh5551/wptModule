const mysql = require("mysql");
const Promise = require("bluebird");
const { add } = require("nodemon/lib/rules");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wptmodule'
}

const record = {
    sender: "Mayuresh",
    reciever: 'mayureshNikam',
    msg: "hiii"
}

async function connectionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connected");
    await connection.endAsync();
}



async function addrecord(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into mytable(username,password)values(?,?);`
    await connection.queryAsync(sql, [user.username, user.password]);

    await connection.endAsync();
}

x


async function getrecord() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `select * from mytable;`
    await connection.queryAsync(sql, []);

    await connection.endAsync();
}


module.exports = { addrecord, getrecord };
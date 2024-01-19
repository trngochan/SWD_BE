var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "bfitxhysivmqo7yuw2gi-mysql.services.clever-cloud.com",
  user: "uvxnl6ouu85ckawq",
  password: "JN0EipWEgsfUDnVMMPMT",
  database: "bfitxhysivmqo7yuw2gi",
});

connection.connect(function (err) {
  if (err) console.error("ket noi k thanh cong");
});

module.exports = connection;

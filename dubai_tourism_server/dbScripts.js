const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abcd",
  database: "TravelImages",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to Database");
  //TODO: uncomment below code if databsase is not present and remove database line in the create connection
  //method's object argument.
  // con.query("CREATE DATABASE TravelImages", (err, result) => {
      // if (err) throw err;
     //  console.log("Database created");
    //});

  //TODO: uncomment below code if table is not present
  // const tableQuery = "CREATE TABLE images(img LONGTEXT)";
   // con.query(tableQuery, (err, res) => {
   //  if (err) throw err;
    // console.log("Table created");
 //  });
});

const insert = (val) => {
  const sql = `INSERT INTO images VALUES ("${val}")`;
  con.query(sql, (err, res) => {
    if (err) throw err;
    else console.log("Row inserted");
  });
};

const select = () => {
  return con;
};

module.exports = { insert, select };

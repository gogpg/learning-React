
const express = require("express");
const app = express();
const port = 3003;   ///pakeiciame porta i 3003, nes norime, kad reactas veiktu 3000 ajame porte
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());


const con = mysql.createConnection({   //jungimasis prie duomenu bazes
    host: "localhost",
    user: "root",
    password: "",
    database: "things",
});

app.get('/', (req, res) => { 
  res.send('Labas, Briedi!');
});

app.get("/labas", (req, res) => {
    const sql = `
    SELECT *
    FROM things
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto`);
});

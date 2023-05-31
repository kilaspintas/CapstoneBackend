const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'capstone',
});

connection.connect((err) => {
  if(err) throw err;
  console.log('Tersambung\n')
})
connection.end((err) => {
  if (err) throw err;
  console.log('Terputus\n');
});

const data = {
  name: 'Irfan',
  role: 'teacher',
  code: 80,
  score: 100
};

const addAccount = (request, h) => {
  connection.query('INSERT INTO data SET ?', data, (err, result) => {
    if (err) throw err;
    console.log('New data inserted.');
  });
}
const getDataAccount = (request, h) => {
  
}
const getDataList = (request, h) => {
  
}
const updateScore = (request, h) => {
  
}
const deleteRoom = (request, h) => {
  
}

module.exports = {addAccount, getDataAccount, getDataList, updateScore, deleteRoom};
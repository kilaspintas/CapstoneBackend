const connection = require('./config')
const {nanoid} = require('nanoid');
let {tempId, listUser} = require('./temporaryValue')

const userId = nanoid(20);

const homePage = (request, h) => {
  return'Ini Home Page Anjay';
}
const addAccount = (request, h) => {
  const {name, role, code, score} = request.payload;
  const data = {id: userId, name: name, role: role, code: code, score: score};
  tempId = userId;
  connection.query('INSERT INTO data SET ?', data, (err, result) => {
    if (err) throw err;
  });  
}
const getDataAccount = (request, h) => {
  connection.query('SELECT * FROM data WHERE id = ?',userId, (err, result) => {
    const hasil = JSON.parse(JSON.stringify(result));
    if (err) throw err;
    else if(result) console.log('Success add id '+hasil[0].id);
  });     
}
const getDataList = (request, h) => {
  const {code} = request.params;
  connection.query('SELECT * FROM data WHERE code = ?',code, (err, result) => {
    const hasil = JSON.parse(JSON.stringify(result));
    if (err) throw err;
    else if(result) console.log(hasil[0].id);
    for(i=0; i<hasil.length; i++){
      listUser[i] = [hasil[i].name, hasil[i].score];
    }
    console.log(listUser)
  });       
}
const updateScore = (request, h) => {
  const {id} = request.params;
  const {score} = request.payload;
  connection.query('UPDATE data SET score = ? WHERE id = ?',[score,id], (err, result) => {
    if (err) throw err;
    else if(result) console.log(result);
  }); 
}
const deleteRoom = (request, h) => {
  const {code} = request.params;
  connection.query('UPDATE data SET score = NULL, code = NULL WHERE code = ?',code, (err, result) => {
    if (err) throw err;
    else if(result) console.log(result);
  }); 
}

module.exports = {homePage, addAccount, getDataAccount, getDataList, updateScore, deleteRoom};
const {homePage, addAccount, getDataAccount, getDataList, updateScore, deleteRoom} = require('./handler')
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: homePage,
  },{
    method: 'POST',
    path: '/api/index',
    handler: addAccount,
  },
  {
    method: 'GET',
    path: '/api/index',
    handler: getDataAccount,
  },
  {
    method: 'GET',
    path: '/api/index/{code}',
    handler: getDataList,
  },
  {
    method: 'PUT',
    path: '/api/index/{id}',
    handler: updateScore,
    // JSON DATA IN POSTMAN
    // {
    //   "score": 10
    // }
  },
  {
    method: 'DELETE',
    path: '/api/index/{code}',
    handler: deleteRoom,
  },
];

module.exports = routes;
const {addAccount, getDataAccount, getDataList, updateScore, deleteRoom} = require('./handler')
const routes = [
  {
    method: 'POST',
    path: '/index',
    handler: getDataAccount,
  },
  {
    method: 'GET',
    path: '/index',
    handler: addAccount,
  },
  {
    method: 'GET',
    path: '/index{code}',
    handler: getDataList,
  },
  {
    method: 'PUT',
    path: '/index{id}',
    handler: updateScore,
  },
  {
    method: 'DELETE',
    path: '/index{code}',
    handler: deleteRoom,
  },
]
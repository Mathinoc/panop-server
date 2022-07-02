const { Router } = require('express');
const  {getAll, getItem, getStock} = require('./controllers/index_controller.js');

const router = Router();

router
  .get('/items',getAll)
  .get('/item/:id',getItem)
  .get('/supplier/:id', getStock)

module.exports = router

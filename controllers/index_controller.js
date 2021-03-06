async function getAll(req, res) {
  try {
    const jsonData = require('./../data/all.json')
    res.status(200);
    res.send(jsonData);
  } catch (error) {
    return new Error("500 could not get the items");
  }
}

function getItem(req, res) {
  try {
    const itemId = req.params.id;
    const path = `./../data/items/${itemId}.json`
    const jsonData = require(path);
    res.status(200);
    res.send(jsonData);
  } catch (error) {
    return new Error("500 could not get item by id");
  }
}
function getStock(req, res) {
  try {
    const supplierId = req.params.id;
    const path = `./../data/suppliers/${supplierId}.json`
    const jsonData = require(path);
    res.status(200);
    res.send(jsonData);
  } catch (error) {
    return new Error("500 could not get item by id");
  }
}

module.exports = { getAll, getItem, getStock };

async function getAll(req, res) {
  try {
    console.log("here");
    let jsonData = require('./../data/all.json')
    res.status(200);
    res.send(jsonData);
  } catch (error) {
    return new Error("500 could not get the items");
  }
}

function getItem(req, res) {
  try {
    console.log(req);
  } catch (error) {
    return new Error("500 could not get item by id");
  }
}
function getStock(req, res) {
  try {
    console.log(req);
  } catch (error) {
    return new Error("500 could not get item by id");
  }
}

module.exports = { getAll, getItem, getStock };

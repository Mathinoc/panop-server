const Express = require("express");
const router = require("./router");
const cors = require("cors");
const PORT = 3000;

const app = Express();

// MIDDLEWARE
app.use(cors()); // if necessary
app.use(Express.json()); //parse the req into json
app.use(router);
app.listen(PORT, () => {
  console.log(`Server up and listening on http://localhost:${PORT} 🪁`);
});

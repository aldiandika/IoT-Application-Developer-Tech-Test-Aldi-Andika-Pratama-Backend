const express = require('express');
const app = express();
const cors = require('cors');

let corsOptions = {
  origin: "http://localhost:3006"
};


// app initialization
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./routes/default_route")(app);

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port : ' + port);


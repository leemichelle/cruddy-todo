const express = require('express');
const app = express();
const db = ('../database/index.js');
const bodyParser = require('body-parser');

//why json over text?
app.use(bodyParser.json());
app.use(express.static('public'));

//I notice on the solution for cruddy todo, fred sent 404 error, but during the grocery list workshop, we sent 500 error to indicate it's a server error..which one should I be using?

//he also used .json instead of using .send..
app.get('/', (req, res) => {
  db.readAll((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/', (req, res) => {
  db.create(req.body.description, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  }
})



app.listen(3000, () => {console.log('listening on port', 3000)});

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'to_do'
});

// make a create function for post request
let create = function(todo, callback) {
  const query = `INSERT INTO todos (description) VALUES (?)`
  connection.query(query, [todo], (err, results) => {
    callback(err);
  });
};
// make a readAll function for get request
let readAll = function(callback) {
  connection.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  });
}
// make a readOne function for get request
let readOne = function(todo, callback) {
  const query = `SELECT (?) FROM todos`
  connection.query(query, [todo], (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  });
};

// make update function for put request
let update = function(todo, callback) {
  const query = `UPDATE todos SET description = (?)`
  connection.query(query, [todo], (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  });
}

// make a delete function for delete request
let delete = function(todo, callback) {
  const query = `DELETE FROM todos WHERE description = (?)`
    callback(err)
  });
}


// Config+Initialization code -- DO NOT MODIFY /////////////////////////////////

exports.dataDir = path.join(__dirname, 'data');

exports.initialize = () => {
  if (!fs.existsSync(exports.dataDir)) {
    fs.mkdirSync(exports.dataDir);
  }
};

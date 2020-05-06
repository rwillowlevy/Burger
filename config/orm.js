const connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
  function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
    return arr.toString();
}
  

let orm = {
    selectAll: function(table,callback) {
        let query = "SELECT * FROM ??"
        connection.query(query,[table], (error, result) => {
            if (error) {
                throw error;
            }
            callback(result);
        })
    },
    insertOne: function(table,cols,vals,callback) {
        let query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, (error,result) => {
            if (error) {
                throw error;
            }
            callback(result);
        })
    },
    updateOne: function(table, objColVals, condition, callback) {
        let query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;
    
        console.log(query);
        connection.query(query, function(error, result) {
          if (error) {
            throw error;
          }
    
          callback(result);
        });
      }

}
module.exports = orm;
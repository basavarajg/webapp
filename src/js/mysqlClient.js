var sysdb  = require('./dbConf');

exports.executeQuery = function(query, args) {
  var connection  = sysdb.establishConnection();
  console.log(query);
  var resultset = connection.query({
    sql: query,
    timeout: 40000, // 40s
    values: args
  }, function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    return results;
    // fields will contain information about the returned results fields (if any)
  });

  sysdb.closeConnection(connection);
  console.log(resultset);
}

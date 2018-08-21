var orm = require("../config/orm.js");

var burger = {
    selecttable: function(cb) {
    orm.selecttable("burger", function(res) {
      cb(res);
    //   console.log("res"+res);
    });
}, // The variables cols and vals are arrays.
create: function(cols, vals, cb) {
  orm.create("burger", cols, vals, function(res) {
    cb(res);
  });
},
update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
}
}
module.exports = burger
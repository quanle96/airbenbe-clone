const fs = require("fs");

function writeCache(file, data) {
  return fs.open(file, "w", function (err, file) {
    if (err) throw err;
    console.log("Saved!");
    return file;
  });
}
function readCache(file) {
  return fs.readFile(file, function (err, data) {
    return data;
  });
}

export {writeCache,readCache}
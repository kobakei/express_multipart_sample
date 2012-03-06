
/*
 * GET home page.
 */
var fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.upload = function (req, res, next) {
  console.log("[POST] upload");
  console.log(req.body);  // other post body
  console.log(req.files); // file objects
  
  // TODO Do something here.
  try {
    fs.readFile(req.files['upload'].path, 'utf-8', function (err, data) {
      if (err) throw err;
      console.log(data);
      res.send('Upload OK: ' + req.body.title);
    });
  } catch (e) {
    console.error(e);
    res.send('ERROR!');
  }
};

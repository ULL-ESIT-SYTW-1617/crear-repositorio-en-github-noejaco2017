"use strict";
var express = require('express');
var app = express();
var path = require('path');
//var expressLayouts = require('express-ejs-layouts');
var exec = require('child_process').exec;



app.set('port', (process.env.PORT || 8080));
//app.use(expressLayouts);
app.use(express.static(path.join(__dirname,'gh-pages')))



app.get('/',function(req, res){
  res.send('index');
});

// este lo hace bien
//app.get('/get', function(request, response){
//
//   exec("ls", (err, stdout, stderr) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(stdout);
//     return;
//   });
//   return;
// });

app.post('/sync',function(req,res){
  // Probando con el clone en el directorio actual
  // exec("git clone git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-noejaco2017.git .", (err, stdout, stderr) => {
  //   if (err) {
  //      console.log("HA OCURRIDO UN ERROR");
  //     console.error(err);
  //     return;
  //   }
  //   console.log("Después del pull de heroku");
  //   console.log(stdout);
  //   return;
  // });


    console.log("Antes de la funcion");
    function puts(err,stdout,stderr){
      if(err)
      console.log("HA OCURRIDO UN ERROR"+err);
      }
      //proceso.exec('git clone git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-noejaco2017.git',puts);
      exec('git pull git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-noejaco2017 .',puts);
      //response.redirect('/');

      console.log("Después del pull de heroku");

});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

module.exports = app;

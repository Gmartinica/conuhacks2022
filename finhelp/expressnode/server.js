var express = require('express');
var app = express();

app.get('/index.html', function(req, res)){
  res.sendFile( __dirname + "/" + "index.htm" );
}

app.get('',function(req, res)){
  response = {
    firstName:req.query.firstName,

    lastName:req.query.lastName,

    hourlyIncome:req.query.hourlyIncome,

    weeklyHours:req.query.weeklyHours,

    savings:req.query.savings,

    loan:{
      credit:req.query.creditLoan,

      student:req.query.studentLoan,

      subscriptions:req.query.subscriptions

    }
  };
  console.log(response);
  res.end(JSON.stringify(response));
}
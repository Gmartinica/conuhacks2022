var express = require('express');
var app = express();
const port = 3000;

app.get('/index.html', function(req, res){
  res.sendFile( __dirname + "/" + "index.htm1" );
})

app.post('/create',function(req, res)
{
  console.log(req);
  response = {
    firstName:req.query.firstName,

    lastName:req.query.lastName,

    hourlyIncome:req.query.hourlyIncome,

    weeklyHours:req.query.weeklyHours,

    savings:req.query.savings,

    loan:{
      credit:req.query.creditLoan,

      creditInterestRate:req.query.creditInterestRate,


      studentLoan:req.query.studentLoan,

      studentLoanInterestRate: req.query.studentLoanInterestRate,

      subscriptions:req.query.subscriptions

    }
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

function getStudentLoanInterest(total,interestRate){
  var dailyInterestRate = interestRate / 365;
  var dailyInterestCharge = dailyInterestRate * total
  return dailyInterestCharge * 365
}
function getCompoundInterest(principal, creditInterestRate, creditYears){
  return principal*((1+creditInterestRate)**creditYears - 1)
}

function yearlyCost(hourlyIncome,weeklyHours,savings,creditLoan,creditInterestRate,studentLoan,studentLoanInterestRate,subscriptions) {

  var futureSavings = savings + (hourlyIncome*weeklyHours*52);

  var comInterest = getCompoundInterest(creditLoan,creditInterestRate)
  var studentInterest = getStudentLoanInterest(studentLoan,studentLoanInterestRate)
  var totalExpenses = comInterest + studentInterest + subscriptions;
  return (futureSavings - totalExpenses) / totalEarnings
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

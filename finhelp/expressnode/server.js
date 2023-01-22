var express = require('express');
var app = express();
var cors = require("cors");

const request = require("request");
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const port = 3000;

app.get("/index.html", function (req, res) {
  var country = "Canada";
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/inflation?country=" + country,
      headers: {
        "X-Api-Key": "gH1d46svlkK7aN2rj05loQ==thrwUmwQcL4CIaCc",
      },
    },
    function (error, response, body) {
      console.log(JSON.parse(body)[0]);
      const inflation = JSON.parse(body)[0].yearly_rate_pct;
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else res.send(`<h1>${inflation}<h1>`);
    }
  );
});

app.get("/create", function (req, res) {
  console.log(req.query);
  //console.log(req);
});

app.post("/create", function (req, res) {
  console.log(req.body);
  user = {
    name: req.query.name,

app.get('/create',function(req, res)
{
  response = {
    firstName:req.query.firstName,

    lastName:req.query.lastName,

    hourlyIncome:req.query.hourlyIncome,

    weeklyHours:req.query.weeklyHours,

    savings:req.query.savings,

    debt: req.query.debt,

    expenses: req.query.expenses
  };
  const income = 4 * user.hourlyIncome * user.weeklyHours;

  ratio = user.debt / (user.savings + income);
  result = '';
  switch (ratio) {
    case ratio <= 0.25:
      result = 0
      break;
    case ratio <= 0.50 && ratio > 0.25:
      result = 1
      break;
    case ratio <= 0.75 && ratio > 0.50:
      result = 2
      break;
    case ratio <= 0.1 && ratio > 0.75:
      result = 3
      break;
    default:
      result = 0;
      break;
  }

  res.send(JSON.stringify({res:result}));
});

app.post("/a", function (req, res) {
  console.log(req.body);
  res.end('ok')
  //console.log(req);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

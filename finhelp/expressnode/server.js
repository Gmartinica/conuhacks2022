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
    firstName:req.body.firstName,


    lastName:req.body.lastName,

    hourlyIncome:req.body.hourlyIncome,

    weeklyHours:req.body.weeklyHours,

    savings:req.body.savings,

    debt: req.body.loan,

    expenses: req.body.expenses
  };
  const income = 4 * user.hourlyIncome * user.weeklyHours;
  console.log(user.hourlyIncome)
  console.log(user.weeklyHours)

  ratio = (user.savings + income)*100/(user.debt)
  console.log(ratio)
  result = '';
  if (ratio <= 0.25)
      result = 0
  if (ratio <= 0.50 && ratio > 0.25)
    result = 1
  if (ratio <= 0.75 && ratio > 0.50)
    result = 2
  if (ratio > 0.75)
    result = 3
  console.log(result)

  res.send(result.toString());
});

app.post("/a", function (req, res) {
  console.log(req.body);
  res.end('ok')
  //console.log(req);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

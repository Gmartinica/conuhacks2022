var express = require("express");
var app = express();

const request = require("request");
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

app.post("/", function (req, res) {
  response = {
    firstName: req.query.firstName,

    lastName: req.query.lastName,

    hourlyIncome: req.query.hourlyIncome,

    weeklyHours: req.query.weeklyHours,

    savings: req.query.savings,

    loan: {
      credit: req.query.creditLoan,

      student: req.query.studentLoan,

      subscriptions: req.query.subscriptions,
    },
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;



// auth0.js
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'fCmRUUiuHhrWdpS37evMxv4_2QXiB2Kkjl9n_6xo_k3W26Io_XAuocmzA8s1PBG5',
  baseURL: 'http://localhost:3000',
  clientID: '3PZfknsZYFTCMsi9UZQpohRVN6K48Arf',
  issuerBaseURL: 'https://dev-xdt1fatydo2dxxcl.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



app.listen(port, () => {
    console.log("Server is listening on port ${port}`");
});

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.post("/", (req, res) => {
//     res.send("Hello World!");
// });
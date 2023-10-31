require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
//add cors options to prevent cors errors in browser
const corsOptions = {
  origin: '*',
  methods: ['POST, GET, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization'],
  exposedHeaders: [],
  credentials: true
};
app.use(cors(corsOptions));
// Parse JSON requests
app.use(bodyParser.json());

//import tax calculator class
const TaxCalculator = require('./tax_calculator/index.js');
const taxCalculator = new TaxCalculator();

// Route for calculating income tax
app.post('/calculateIncomeTax', (req, res) => {

  //console.log("enter /calculateIncomeTax with body: " + JSON.stringify(req.body));
  // Read the request body
  const {
    grossIncome,
    maritalStatus,
    year
  } = req.body;

  	taxCalculator.calculateIncomeTax(grossIncome, maritalStatus, year, function (result) {
    console.log("writing result: " + JSON.stringify(result));
    res.json(result);
  });
});

// Route for calculating income tax
app.get('/cobolTest', (req, res) => {



  // Default response
  const result = taxCalculator.testCobol(function (result) {
    console.log("writing result: " + JSON.stringify(result));
    res.json(result);
  });


});

// Default route for unimplemented routes
app.use((req, res) => {
  console.log("accessing default route");
  res.status(501).json({
    error: 'Not Implemented'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
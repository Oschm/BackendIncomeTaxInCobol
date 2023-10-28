require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

// Parse JSON requests
app.use(bodyParser.json());

//import tax calculator class
const TaxCalculator = require('./tax_calculator/tax.js');
const taxCalculator = new TaxCalculator();

// Route for calculating income tax
app.post('/calculateIncomeTax', (req, res) => {
    // Read the request body
    const { grossIncome, maritalStatus, year } = req.body;
  
    // Default response
    const incomeTax = taxCalculator.calculateIncomeTax(grossIncome, maritalStatus, year);
  
    // You can implement your income tax calculation logic here
    // For now, just return the default
    res.json({ incomeTax });
  });
  
  // Default route for unimplemented routes
  app.use((req, res) => {
    res.status(501).json({ error: 'Not Implemented' });
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
const calculator = require("./calculator.js");

class IncomeTaxCalculator {

  //calculates income tax depending on grossIncome, marital status and year of calculation.
  //returns an object with following keys:
  //  -sum: decimal
  //to be extended with breakdown of tax brackets
  calculateIncomeTax(grossIncome, maritalStatus, Year, callback) {

    const incomeTax = calculator.calculateIncomeTax(grossIncome, maritalStatus, Year, function(result){
     callback({
      sum: parseFloat(result)
    }); 
    });

  

  }

 testCobol(callback) {

    const result =  calculator.testCobol(callback);

   
  }
}
module.exports = IncomeTaxCalculator;
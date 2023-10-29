const expect = require('chai').expect;
require('dotenv').config();

const TaxCalculator = require('../tax_calculator/index.js');
const taxCalculator = new TaxCalculator();



describe('My Module', function() {
  it('Tests if required environment variable is set (will always pass)', function() {
    const env_variable = process.env.GNUCOBOL_DIRECTORY;
    expect(env_variable).to.be.to.not.be.undefined;
  });
  it('Tests income tax calculator for Income of 10.000€ and Not Married and Year 2023', function(done) {
    const income = 10000;
    const isMarried = "N";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(0);
      done();
    });
    
  });
  it('Tests income tax calculator for Income of 10.000€ and Married and Year 2023', function(done) {
    const income = 10000;
    const isMarried = "Y";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(0);
      done();
    });
  });
  it('Tests income tax calculator for Income of 25.000€ and Not Married and Year 2023', function(done) {
    const income = 25000;
    const isMarried = "N";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(3280.00);
      done();
    });
  });
  /*it('Tests income tax calculator for Income of 25.000€ and Married and Year 2023', function(done) {
    const income = 25000;
    const isMarried = "Y";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(494.00);
      done();
    });
  });
  */
  it('Tests income tax calculator for Income of 50.000€ and Not Married and Year 2023', function(done) {
    const income = 50000;
    const isMarried = "N";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(11343.00);
      done();
    });
  });
  /*
  it('Tests income tax calculator for Income of 50.000€ and Married and Year 2023', function(done) {
    const income = 50000;
    const isMarried = "Y";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(6560.00);
      done();
    });
  });
  */
  it('Tests income tax calculator for Income of 150.000€ and Not Married and Year 2023', function(done) {
    const income = 150000;
    const isMarried = "N";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(53027.00);
      done();
    });
  });
  /*
  it('Tests income tax calculator for Income of 150.000€ and Married and Year 2023', function(done) {
    const income = 150000;
    const isMarried = "Y";
    const calculationYear = 2023;
    taxCalculator.calculateIncomeTax(income, isMarried, calculationYear, function(result){
      expect(result.sum).to.equal(43054.00);
      done();
    });
  });
  */
});

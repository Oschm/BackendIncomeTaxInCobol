const expect = require('chai').expect;
require('dotenv').config();

const TaxCalculator = require('../tax_calculator/tax.js');
const taxCalculator = new TaxCalculator();



describe('My Module', function() {
  it('Tests if required environment variable is set (will always pass)', function() {
    const env_variable = process.env.GNUCOBOL_DIRECTORY
    expect(env_variable).to.be.to.not.be.undefined;
  });
  it('Tests income tax calculator for Income of 10.000€ and Not Married and Year 2023', function() {
    const income = 10000;
    const isMarried = false;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(0);
  });
  it('Tests income tax calculator for Income of 10.000€ and Married and Year 2023', function() {
    const income = 10000;
    const isMarried = true;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(0);
  });
  it('Tests income tax calculator for Income of 25.000€ and Not Married and Year 2023', function() {
    const income = 25000;
    const isMarried = false;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(3280.00);
  });
  it('Tests income tax calculator for Income of 25.000€ and Married and Year 2023', function() {
    const income = 25000;
    const isMarried = true;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(494.00);
  });
  it('Tests income tax calculator for Income of 50.000€ and Not Married and Year 2023', function() {
    const income = 50000;
    const isMarried = false;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(11343.00);
  });
  it('Tests income tax calculator for Income of 50.000€ and Married and Year 2023', function() {
    const income = 50000;
    const isMarried = true;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(6560.00 );
  });
  it('Tests income tax calculator for Income of 150.000€ and Not Married and Year 2023', function() {
    const income = 150000;
    const isMarried = false;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(55943.48);
  });
  it('Tests income tax calculator for Income of 150.000€ and Married and Year 2023', function() {
    const income = 150000;
    const isMarried = true;
    const calculationYear = 2023;
    const incomeTax = taxCalculator.calculateIncomeTax(income, isMarried, calculationYear).sum;
    expect(incomeTax).to.equal(44002.19);
  });
});
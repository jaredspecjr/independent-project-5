import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){
  it('should take the inputted age and convert the years to seconds', function(){
    let currentAge = new Calculator(20);
    currentAge.ageToSeconds();
    expect(currentAge.ageToSeconds()).toEqual(631152000);
  });
  it('should find the difference of the current date minus the user inputted date', function(){
    let currentAge = new Calculator();
    let date = new Date(1991, 7, 12);
    currentAge.datesToAge();
    expect(currentAge.datesToAge()).toEqual(26);
  });
});

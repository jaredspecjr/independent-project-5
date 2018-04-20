import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){
  it('should take the inputted age and convert the years to seconds', function(){
    let currentAge = new Calculator(20);
    currentAge.ageToSeconds();
    expect(currentAge.ageToSeconds()).toEqual(631152000);
  });
  it('should find the difference of the current date minus the user inputted date', function(){
  let currentAge = new Calculator();
  currentAge.birthDate = new Date(694252944000);
  currentAge.datesToAge();
  expect(currentAge.age).toEqual(26);
  });
  it('should calculate your age to what it would be on mercury', function(){
  let currentAge = new Calculator();
  currentAge.birthDate = new Date(694252944000);
  currentAge.datesToAge();
  currentAge.ageOnMercury();
  expect(currentAge.newAge).toEqual(108);
  });
  
});

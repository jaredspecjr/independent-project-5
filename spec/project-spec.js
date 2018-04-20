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
  it('should calculate your age to what it would be on Mercury', function(){
  let currentAge = new Calculator();
  currentAge.birthDate = new Date(694252944000);
  currentAge.datesToAge();
  currentAge.ageOnMercury();
  expect(currentAge.newAge).toEqual(108);
  });
  it('should calculate your age to what it would be on Venus', function(){
  let currentAge = new Calculator();
  currentAge.birthDate = new Date(694252944000);
  currentAge.datesToAge();
  currentAge.ageOnVenus();
  expect(currentAge.newAge).toEqual(41);
  });
  it('should calculate your age to what it would be on Mars', function(){
  let currentAge = new Calculator();
  currentAge.birthDate = new Date(694252944000);
  currentAge.datesToAge();
  currentAge.ageOnMars();
  expect(currentAge.newAge).toEqual(13);
  });
  it('should calculate your age to what it would be on Jupiter', function(){
  let currentAge = new Calculator();
  currentAge.birthDate = new Date(694252944000);
  currentAge.datesToAge();
  currentAge.ageOnJupiter();
  expect(currentAge.newAge).toEqual(2);
  });
  it('should determine how long you have left to live', function(){
  let currentAge = new Calculator(26);
  currentAge.ageCheck();
  expect(currentAge.yearsLeft).toEqual(64);
  });
});

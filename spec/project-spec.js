import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){
  it('should take the inputted age and convert the years to seconds', function(){
    let currentAge = new Calculator(20);
    currentAge.ageToSeconds();
    expect(currentAge.ageToSeconds()).toEqual(631152000);
  });
  it('should find the difference of the current date minus the user inputted date', function(){
  let currentAge = new Calculator(age, birthDate);
  let birthDate = new Date(1991, 07, 12);
  this.birthDate = birthDate.getFullYear();
  currentAge.datesToAge();







  //   let currentAge = new Calculator();
  //   let inputtedDate = new Date(1991, 7, 12);
  //   let inputtedYear = inputtedDate.getFullYear();
  //   this.date = inputtedYear;
  //   currentAge.datesToAge();
  //   expect(this.age).toEqual(26);
  // });
});

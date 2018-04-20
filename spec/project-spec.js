import { Calculator } from './../src/calculator.js';
describe('Calculator', function(){
  it('should take the inputted age and convert the years to seconds', function(){
    let currentAge = new Calculator(20);
    currentAge.ageToSeconds();
    expect(currentAge.ageToSeconds()).toEqual(631152000)
  });
});

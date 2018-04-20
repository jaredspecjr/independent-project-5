
class Calculator{
  constructor(age, birthDate){
    this.age = age;
    this.birthDate;
    this.currentDate;
    this.newAge;
    this.lifeExpectancy = 90;
    this.exceededExpectancy = 0;
    this.yearsLeft = 0;

  }
  ageToSeconds(){
    let result = this.age * 31557600;
    return result;
  }
  datesToAge(){
    let birthDate = this.birthDate;
    let currentDate = new Date();
    let currentResult = parseInt(currentDate.getFullYear());
    let birthResult = parseInt(birthDate.getFullYear());
    let ageResult = currentResult - birthResult;
    this.age = ageResult;
    return this.age;
  }
  ageOnMercury(){
    let result = Math.floor(this.age / .24);
    this.newAge = result;
    return this.newAge;
  }
  ageOnVenus(){
    let result = Math.floor(this.age / .62);
    this.newAge = result;
    return this.newAge;
  }
  ageOnMars(){
    let result = Math.floor(this.age / 1.88);
    this.newAge = result;
    return this.newAge;
  }
  ageOnJupiter(){
    let result = Math.floor(this.age / 11.86);
    this.newAge = result;
    return this.newAge;
  }
  ageCheck(){
    debugger;
    let result = this.lifeExpectancy - this.age;
    if(this.age < 90){
      this.yearsLeft = result;
    } else if(this.age > 90){
      this.exceededExpectancy = result;
    }
  }
}

export { Calculator };

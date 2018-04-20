
class Calculator{
  constructor(age, birthDate){
    this.age = age;
    this.birthDate;
    this.currentDate;
    this.newAge;

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
}


export { Calculator };


class Calculator{
  constructor(age, birthDate){
    this.age = age;
    this.birthDate;
    this.currentDate;

  }
  ageToSeconds(){
    let result = this.age * 31557600;
    return result;
  }
  datesToAge(){
    debugger;
    let birthDate = this.birthDate;
    let currentDate = new Date();
    let currentResult = parseInt(currentDate.getFullYear());
    let birthResult = parseInt(birthDate.getFullYear());
    let ageResult = currentResult - birthResult;
    this.age = ageResult;
    return this.age;
  }
  ageOnMercury(){
    let result = this.age / .24;
    return result;
  }
}


export { Calculator };

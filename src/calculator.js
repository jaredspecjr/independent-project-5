
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
    return ageResult;
    // let birthDate = this.date;
    // let currentDate = new Date();
    // let currentResult = currentDate.getFullYear();
    // this.age = currentResult - birthDate;
  }
}


export { Calculator };

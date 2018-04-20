
class Calculator{
  constructor(age, date){
    this.age = age;
    this.birthDate = birthDate;
  }
  ageToSeconds(){
    let result = this.age * 31557600;
    return result;
  }
  datesToAge(){
    debugger;

    // let birthDate = this.date;
    // let currentDate = new Date();
    // let currentResult = currentDate.getFullYear();
    // this.age = currentResult - birthDate;
  }
}


export { Calculator };

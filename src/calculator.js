class Calculator{
  constructor(age, date){
    this.age = age;
    this.date = date;
  }
  ageToSeconds(){
    let result = this.age * 31557600;
    return result;
  }
  debugger;
  datesToAge(){
    let birthDate = this.date;
    let currentDate = new Date();
    let currentResult = currentDate.getFullYear();
    let age = currentResult - birthDate;
    return age;
  }
}


export { Calculator };

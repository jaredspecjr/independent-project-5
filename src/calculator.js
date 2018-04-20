class Calculator{
  constructor(age, date){
    this.age = age;
    this.date = date;
  }
  ageToSeconds(){
    let result = this.age * 31557600;
    return result;
  }
  datesToAge(){
    let currentDate = new Date();
    let birthDate = this.date;
    let currentResult = currentDate.getFullYear();
    let result = currentResult - birthDate;
  }
}


export { Calculator };

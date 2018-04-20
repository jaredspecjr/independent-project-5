class Calculator{
  constructor(age){
    this.age = age;
  }
  ageToSeconds(){
    let result = this.age * 31557600;
    return result;
  }
}


export { Calculator };

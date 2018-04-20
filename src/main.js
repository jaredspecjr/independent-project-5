import { Calculator } from './../src/calculator.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    let userBirthDate = new Calculator();
    userBirthDate.age = $("#birthDate").val();
    if($("#planet").val() === "mercury"){
      userBirthDate.ageOnMercury();
      $(".answer").text(userBirthDate.newAge);
    } else if($("#planet").val() === "venus"){
      userBirthDate.ageOnVenus();
      $(".answer").text(userBirthDate.newAge);
    } else if($("#planet").val() === "mars"){
      userBirthDate.ageOnMars();
      $(".answer").text(userBirthDate.newAge);
    } else if($("#planet").val() === "jupiter"){
      userBirthDate.ageOnJupiter();
      $(".answer").text(userBirthDate.newAge);
    }
  });
});

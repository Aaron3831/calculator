
var weight = function(){
  return parseFloat(prompt("how much do you weight")*0.45)
}

var height = function(){
  return parseFloat(Math.pow(prompt("How tall are you in inches")*0.025,2))
}

var BMI = function(){
  return weight()/height()
}

BMI();

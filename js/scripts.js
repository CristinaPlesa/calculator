
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number3, number4) {
  return number3 - number4;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}
$(document).ready(function() {
  $("form#calculator").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    if (operator==="add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator==="divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
  
});
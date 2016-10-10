 var answerBox = document.getElementById("answer");

var calculate = function (event) {
  event.preventDefault ();
  var val1 = Number(document.getElementById("value-one").value);
  var val2 = Number(document.getElementById("value-two").value);
  answerBox.innerHTML = val1 + val2;
};

var calcButton = document.getElementById("calculate-button");
calcButton.addEventListener("click", calculate);

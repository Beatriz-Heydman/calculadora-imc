const rangeHeight = document.getElementById("input_range_height");
const spanHeight = document.getElementById("height");

rangeHeight.addEventListener("input", (event) => {
  spanHeight.innerHTML = `${event.target.value} cm`;
});

const rangeWeight = document.getElementById("input_range_weight");
const spanWeight = document.getElementById("weight");

rangeWeight.addEventListener("input", (event) => {
  spanWeight.innerHTML = `${event.target.value} kg`;
});

const buttonPlusHeight = document.querySelector(".button_height_plus");

buttonPlusHeight.addEventListener("click", () => {
  if (Number(rangeHeight.value) < 250) {
    rangeHeight.value = Number(rangeHeight.value) + 1;
    spanHeight.innerHTML = Number(rangeHeight.value) + " " + "cm";
  }
});

const buttonMinusHeight = document.querySelector(".button_height_minus");

buttonMinusHeight.addEventListener("click", () => {
  if (Number(rangeHeight.value) > 1) {
    rangeHeight.value = Number(rangeHeight.value) - 1;
    spanHeight.innerHTML = Number(rangeHeight.value) - " " + "cm";
  }
});

const buttonPlusWeight = document.querySelector(".button_weight_plus");

buttonPlusWeight.addEventListener("click", () => {
  if (Number(rangeWeight.value) > 1) {
    rangeWeight.value = Number(rangeWeight.value) + 1;
    spanWeight.innerHTML = Number(rangeWeight.value) + " " + "kg";
  }
});

const buttonMinusWeight = document.querySelector(".button_weight_minus");

buttonMinusWeight.addEventListener("click", () => {
  if (Number(rangeWeight.value) < 200) {
    rangeWeight.value = Number(rangeWeight.value) - 1;
    spanWeight.innerHTML = Number(rangeWeight.value) + " " + "kg";
  }
});

let gender;

const buttonMaleGender = document.querySelector(".male");
const buttonFemaleGender = document.querySelector(".female");

buttonMaleGender.addEventListener("click", () => {
  gender = "male";
});
buttonFemaleGender.addEventListener("click", () => {
  gender = "female";
});

const calculatorContainer = document.querySelector(".calculator_container");
const resultContainer = document.querySelector(".result_container");
const buttonCalculate = document.querySelector(".button_calculate");
const spanResult = document.querySelector(".result_numbers");

let resultNumber;

buttonCalculate.addEventListener("click", () => {
  const heightInMeter = Number(rangeHeight.value) / 100;

  const squaredMeter = heightInMeter * heightInMeter;

  resultNumber = (Number(rangeWeight.value) / squaredMeter).toFixed(2);

  spanResult.innerHTML = resultNumber;

  calculatorContainer.style.display = "none";
  resultContainer.style.display = "flex";
});

const barColor = document.querySelector(".bar_color");

if (resultNumber < 17) {
  resultTableName = "Magreza";
} else if (resultNumber >= 17 || resultNumber <= 18.5) {
  resultTableName = "Abaixo do peso";
} else if (resultNumber >= 18.5 || resultNumber <= 25) {
  resultTableName = "Peso ideal";
} else if (resultNumber >= 25 || resultNumber <= 30) {
  resultTableName = "Sobrepeso";
} else {
  resultTableName = "Obesidade";
}
switch (resultTableName) {
  case "Magreza": {
    barColor.style.background = "red";
    break;
  }
  case "Abaixo do peso": {
    barColor.style.background = "yellow";
    break;
  }
  case "Peso ideal": {
    barColor.style.background = "green";
    break;
  }
  case "Sobrepreso": {
    barColor.style.background = "yellow";
    break;
  }
  case "Obesidade": {
    barColor.style.background = "red";
    break;
  }
  default:
    barColor.style.background = "#616161";
}

const buttonComeBack = document.querySelector(".button_come_back");

buttonComeBack.addEventListener("click", () => {
  calculatorContainer.style.display = "flex";
  resultContainer.style.display = "none";
});

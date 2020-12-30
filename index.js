function doDisplay() {
  this.checkedValue = document.querySelector(
    'input[name="shape"]:checked'
  ).value;
  document.getElementById("title").innerHTML = "Step 2 : Insert your values";
  document.getElementById("header").innerHTML =
    "You have selected a " +
    this.checkedValue +
    ", please input the required value";
  document.getElementById("selector").style.display = "none";
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function gotoStep3() {
  document.getElementById("title").innerHTML = "Step 3 : Your results";
  document.getElementById("header").innerHTML =
    "You have calculated the area of  " +
    this.checkedValue +
    ". Below is your result";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
}
function gotoStep1() {
  document.getElementById("title").innerHTML = "Step 1 : Select your shape";
  document.getElementById("header").innerHTML =
    "Please select the shape that would like to calculate the area of and press the button Go to step 2";
  document.getElementById("step3").style.display = "none";
  document.getElementById("selector").style.display = "block";
  document.getElementById("step1").style.display = "block";
}

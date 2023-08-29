let inputErrors = document.querySelectorAll(".inputError");
let forminputs = document.querySelectorAll(".formInputs")
let mainForm = document.querySelector("#form");
let subButton = document.querySelector("#subButton")

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let allFieldsFilled = true;

  if (name.value === "") {
    inputErrors[0].style.display = "block";
    forminputs[0].style.borderColor = "hsl(354, 84%, 57%)"
    allFieldsFilled = false
} else {
    forminputs[0].style.borderColor = "hsl(229, 24%, 87%)"
    inputErrors[0].style.display = "none";
}

if (email.value === "") {
    inputErrors[1].style.display = "block";
    forminputs[1].style.borderColor = "hsl(354, 84%, 57%)"
    allFieldsFilled = false

} else {
    forminputs[1].style.borderColor = "hsl(229, 24%, 87%)"
    inputErrors[1].style.display = "none";
}

if (phone.value === "") {
    inputErrors[2].style.display = "block";
    forminputs[2].style.borderColor = "hsl(354, 84%, 57%)"
    allFieldsFilled = false

} else {
    forminputs[2].style.borderColor = "hsl(229, 24%, 87%)"
    inputErrors[2].style.display = "none";
}


if(allFieldsFilled)
{
    localStorage.name = name.value;
    localStorage.email = email.value;
    localStorage.phone = phone.value;
    console.log(e);
    location.href = "step2.html";
}
  
});

localStorage.arcadeMonthlyPrice = 9
localStorage.arcadeYearlyPrice = 90
localStorage.advancedMonthlyPrice = 12
localStorage.advancedYearlyPrice = 120
localStorage.proMonthlyPrice = 15
localStorage.proYearlyPrice = 150


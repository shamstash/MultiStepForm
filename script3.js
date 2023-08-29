let goBackBtn = document.querySelector("#goBackBtn") 
let confirmTitle = document.querySelector("#confirmTitle")
let upperPrice = document.querySelector("#upperPrice")
let addOnPrice = document.querySelector("#addOnPrice")
let changeBtn = document.querySelector("#changeBtn")
let innerLower = document.querySelector("#innerLower")
let lastPrice = document.querySelector("#lastPrice")
let confirmBtn = document.querySelector("#confirmBtn")
let selectedPlan = ""
let selectedPeriod = ""
let totalPrice = 0
let monthlyOrNot = ""

function chosenPeriod() {
    if(localStorage.monthlySelected === "true"){
        selectedPeriod = "Monthly"
    } else if(localStorage.yearlySelected === "true"){
        selectedPeriod = "Yearly"
    }
    return selectedPeriod
}



function chosenPlan() {
    if(localStorage.arcadeSelected === "true" && localStorage.monthlySelected === "true"){
        selectedPlan = "Arcade"
        upperPrice.innerText = `$${localStorage.arcadeMonthlyPrice}/mo`
        totalPrice = 9
    }else if(localStorage.advancedSelected === "true" && localStorage.monthlySelected ==="true"){
        selectedPlan = "Advanced"
        upperPrice.innerText = `$${localStorage.advancedMonthlyPrice}/mo`
        totalPrice = 12
    } else if(localStorage.proSelected === "true" && localStorage.monthlySelected === "true") {
        selectedPlan = "Pro"
        upperPrice.innerText =`$${localStorage.proMonthlyPrice}/mo`
        totalPrice = 15
    } else if(localStorage.arcadeSelected === "true" && localStorage.yearlySelected === "true"){
        selectedPlan = "Arcade"
        upperPrice.innerText = `$${localStorage.arcadeYearlyPrice}/yr`
        totalPrice = 90
    } else if(localStorage.advancedSelected === "true" && localStorage.yearlySelected === "true"){
        selectedPlan = "Advanced"
        upperPrice.innerText = `$${localStorage.advancedYearlyPrice}/yr`
        totalPrice = 120
    } else if(localStorage.proSelected === "true" && localStorage.yearlySelected === "true"){
        selectedPlan = "Pro"
        upperPrice.innerText = `$${localStorage.proYearlyPrice}/yr`
        totalPrice = 150
    }
    
} 

chosenPlan()
chosenPeriod()

confirmTitle.innerText = `${selectedPlan}(${selectedPeriod})`


function appendAddOn(title, price){
    let div = document.createElement("div")
    let addOnTitle = document.createElement("h5")
    let addOnPrice = document.createElement("h5")
    addOnTitle.innerText = title
    addOnPrice.innerText = price
    div.setAttribute("id", "confirmationAddOnContainer")
    addOnTitle.setAttribute("id", "addOnTitle")
    addOnPrice.setAttribute("id", "addOnPrice")
    innerLower.appendChild(div)
    div.appendChild(addOnTitle)
    div.appendChild(addOnPrice)
}

function addAddOns() {
    if (localStorage.onlineServiceCheck === "true" && localStorage.monthlySelected === "true") {
        appendAddOn("Online Service", "+$1/mo");
        totalPrice+= 1
    }
    if (localStorage.onlineServiceCheck === "true" && localStorage.yearlySelected === "true") {
        appendAddOn("Online Service", "+$10/mo");
        totalPrice+= 10
    }
    if (localStorage.largerStorageCheck === "true" && localStorage.monthlySelected === "true") {
        appendAddOn("Larger Storage", "+$2/mo");
        totalPrice+=2
    }
    if (localStorage.largerStorageCheck === "true" && localStorage.yearlySelected === "true") {
        appendAddOn("Larger Storage", "+$20/mo");
        totalPrice+=20
    }
    if (localStorage.customizableProfileCheck === "true" && localStorage.monthlySelected === "true") {
        appendAddOn("Customizable Profile", "+$2/mo");
        totalPrice+=2
    }
    if (localStorage.customizableProfileCheck === "true" && localStorage.yearlySelected === "true") {
        appendAddOn("Customizable Profile", "+$20/mo");
        totalPrice+=20
    }
    if(localStorage.onlineServiceCheck === "false" && localStorage.largerStorageCheck === "false" && localStorage.customizableProfileCheck === "false"){
        appendAddOn("No Add-Ons Added","")
    }
}


addAddOns()

function checkIfMonth(){
    if(localStorage.monthlySelected === "true"){
        monthlyOrNot = "mo"
    } else {
        monthlyOrNot = "yr"
    }
}
checkIfMonth()

lastPrice.innerText = `+${totalPrice}/${monthlyOrNot}`









changeBtn.addEventListener("click", (e) => {
    location.href = "step2.html"
})




goBackBtn.addEventListener("click", (e) => {
    location.href = "step3.html"
})


confirmBtn.addEventListener("click", (e) => {
    location.href = "thanksScreen.html"
})
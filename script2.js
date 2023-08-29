let goBackBtn = document.querySelector("#goBackBtn")
let onlineServiceCheck = document.querySelector("#onlineServiceCheck")
let largerStorageCheck = document.querySelector("#largerStorageCheck")
let customizableProfileCheck = document.querySelector("#customizableProfileCheck")
let onlineServiceContainer = document.querySelector("#onlineServiceContainer")
let largerStorageContainer = document.querySelector("#largerStorageContainer")
let customizableProfileContainer = document.querySelector("#customizableProfileContainer")
let subButton = document.querySelector("#subButton")
let addOnPrice = document.querySelectorAll(".addOnPrice")


localStorage.onlineServiceCheck = false
localStorage.largerStorageCheck = false
localStorage.customizableProfileCheck = false

onlineServiceContainer.addEventListener("click", (e) => {
    if(onlineServiceCheck.checked == false){
    onlineServiceCheck.checked = true
    onlineServiceContainer.classList.add("selectedPlan")
}
    else {
        onlineServiceCheck.checked = false
        onlineServiceContainer.classList.remove("selectedPlan")
    }
    refreshLocalStorage1()

}
)
largerStorageContainer.addEventListener("click", (e) => {
    if(largerStorageCheck.checked == false){
    largerStorageCheck.checked = true
    largerStorageContainer.classList.add("selectedPlan")
}
    else {
        largerStorageCheck.checked = false
        largerStorageContainer.classList.remove("selectedPlan")
 
   }
   refreshLocalStorage1()

}
)
customizableProfileContainer.addEventListener("click", (e) => {
    if(customizableProfileCheck.checked == false){
    customizableProfileCheck.checked = true
    customizableProfileContainer.classList.add("selectedPlan")
}
    else {
        customizableProfileCheck.checked = false
        customizableProfileContainer.classList.remove("selectedPlan")
    }
    refreshLocalStorage1()

}

)


function checkIfYear(){
    if(localStorage.yearlySelected === "true"){
        addOnPrice[0].innerText = "+$10/yr"
        addOnPrice[1].innerText = "+$20/yr"
        addOnPrice[2].innerText = "+$20/yr"
    }
}
checkIfYear()


goBackBtn.addEventListener("click", (e) => {
    location.href = "step2.html"
    })

subButton.addEventListener("click", (e) => {
    location.href = "step4.html"
})



function refreshLocalStorage1(){
    localStorage.onlineServiceCheck = onlineServiceCheck.checked
    localStorage.largerStorageCheck = largerStorageCheck.checked
    localStorage.customizableProfileCheck = customizableProfileCheck.checked
    }


localStorage.onlineServicePriceMonth = 1
localStorage.onlineServicePriceYear = 10
localStorage.largerStoragePriceMonth = 2
localStorage.largerStoragePriceYear = 20
localStorage.customizableProfilePriceMonth = 2
localStorage.customizableProfilePriceYear = 20





    
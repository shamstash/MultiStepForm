let sliderCont = document.querySelector("#sliderContainer")
let slider = document.querySelector("#slider")
let pricings = document.querySelectorAll(".planPricing")
let plans = document.querySelectorAll(".plan")
let submitButton = document.querySelector("#subButton")
let goBackBtn = document.querySelector("#goBackBtn")
let arcade = document.querySelector("#arcade")
let advanced = document.querySelector("#advanced")
let pro = document.querySelector("#pro")
let monthlySelected = true
let yearlySelected = false
let arcadeSelected = false
let advancedSelected = false
let proSelected = false





arcade.addEventListener("click", (e) => {
    advanced.classList.remove("selectedPlan");
    pro.classList.remove("selectedPlan");
    arcade.classList.add("selectedPlan");
    arcadeSelected = true;
    advancedSelected = false;
    proSelected = false;
    refreshLocalStorage()
})

advanced.addEventListener("click", (e) => {
    arcade.classList.remove("selectedPlan");
    pro.classList.remove("selectedPlan");
    advanced.classList.add("selectedPlan");
    advancedSelected = true;
    arcadeSelected = false;
    proSelected = false;
    refreshLocalStorage()
})

pro.addEventListener("click", (e) => {
    arcade.classList.remove("selectedPlan");
    advanced.classList.remove("selectedPlan");
    pro.classList.add("selectedPlan");
    proSelected = true;
    arcadeSelected = false;
    advancedSelected = false;
    refreshLocalStorage()
})



function sliderOnYear(){
    monthlySelected = false
    yearlySelected = true
    sliderCont.style.justifyContent = "flex-end";
    pricings[0].innerText = "$90/yr"
    pricings[1].innerText = "$120/yr"
    pricings[2].innerText = "$150/yr"

    const p = document.createElement("h5")
    p.innerText = "2 Months free"
    plans.forEach(plan =>{
        plan.appendChild(p.cloneNode(true))}
        )
        
        refreshLocalStorage()
}

function sliderOnMonth() {
    yearlySelected = false
    monthlySelected = true
    sliderCont.style.justifyContent = "flex-start";
    pricings[0].innerText = "$9/mo";
    pricings[1].innerText = "$12/mo";
    pricings[2].innerText = "$15/mo";

    plans.forEach(plan => {
        const labels = plan.querySelectorAll("h5")
        labels.forEach(label => {
            if (label.innerText === "2 Months free") {
                label.remove();
            }
        })
    })

    refreshLocalStorage()
}


sliderCont.addEventListener("click", function() {
    var computedStyle = window.getComputedStyle(sliderCont);
    
    if (computedStyle.justifyContent === "flex-start") {
        sliderOnYear()



    } else if (computedStyle.justifyContent === "flex-end") {
       sliderOnMonth()

    }
});


goBackBtn.addEventListener("click", (e) => {
location.href = "index.html"
})


submitButton.addEventListener("click", (e) => {
    location.href = "step3.html"
} )



function refreshLocalStorage() {
    localStorage.arcadeSelected = arcadeSelected
    localStorage.advancedSelected = advancedSelected
    localStorage.proSelected = proSelected
    localStorage.monthlySelected = monthlySelected
    localStorage.yearlySelected = yearlySelected
}


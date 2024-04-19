let height = document.querySelector(".height")
let weight = document.querySelector(".weight")
let button = document.querySelector("button")
let hError = document.querySelector(".h_error")
let wError = document.querySelector(".w_error")
let result = document.querySelector(".result")
let h2 = document.querySelector("h2")
let p = document.querySelector("p")

button.addEventListener("click",function () {
    if (height.value == ""){
        hError.innerHTML = "Your Height { Inc }"
    }else{
        hError.innerHTML = ""
    }
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    if (weight.value == ""){
        wError.innerHTML = "Your Weight { kg }"
    }else{
        wError.innerHTML = ""
    }
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    if (!height.value == "" && !weight.value =="") {

        let bmi = (weight.value * 2.20462) / ( height.value*height.value) * 703
        result.innerHTML ="result: " + bmi.toFixed(2)


        if (bmi < 18.5){
            p.innerHTML="underWeight"
            result.style.color = "red" 
            p.style.color = "red"

        }else if( bmi >= 18.5 && bmi <= 24.9){
            p.innerHTML="Healthy Range"
            result.style.color = "green"
            p.style.color = "green"


        }else if(bmi > 24.9)
            p.innerHTML="OverWeight"
            result.style.color = "red" 
            p.style.color = "red"



    }


})

// weight (lb) ÷ height2 (inches) * 703.
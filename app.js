//Basic functions
function add (a, b) {
    return a + b
}
function subtract (a, b) {
    return a - b
}
function multiply (a, b) {
    return a * b
}
function divide (a, b) {
    return a/b
}

//Operation variables
let a = 0
let b = 0
let switchB = 1
let switchA = 0
let operator = ""

//Function operate
//function operate (a, operator, b){
//    return a
//}

//Operator selectors
const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const equalBtn = document.querySelector(".equal")

addBtn.addEventListener("click", ()=> {
    if (switchA === 0 && switchB === 1){
    switchA = 1
    switchB = 0
    if (temporal === null) {
        result = 0
        temporal = tempA
        operator = "add"
        return
    }
    operate(temporal, operator, a)
    operator = "add"
    temporal = result
    display.textContent = temporal
    } else if (switchA === 1 && switchB === 0){
    operate(temporal, operator, b)
    operator = "add"
    temporal = result
    switchA = 0
    switchB = 1
    clear()
    display.textContent = temporal
    }
})
subtractBtn.addEventListener("click", ()=> {
    if (switchA === 0 && switchB === 1){
        switchA = 1
        switchB = 0
        if (temporal === null) {
            result = 0
            temporal = tempA
            operator = "subtract"
            return
        }
        operate(temporal, operator, a)
        operator = "subtract"
        temporal = result
        console.log("=)")
        display.textContent = temporal
        } else if (switchA === 1 && switchB === 0){
        operate(temporal, operator, b)
        temporal = result
        switchA = 0
        switchB = 1
        operator = "subtract"
        clear()
        display.textContent = temporal
        }
})
multiplyBtn.addEventListener("click", ()=> {
    if (switchA === 0 && switchB === 1){
        switchA = 1
        switchB = 0
        if (temporal === null) {
            result = 0
            temporal = tempA
            operator = "multiply"
            return
        }
        operate(temporal, operator, a)
        operator = "multiply"
        temporal = result
        console.log("=)")
        display.textContent = temporal
        } else if (switchA === 1 && switchB === 0){
        operate(temporal, operator, b)
        temporal = result
        switchA = 0
        switchB = 1
        operator = "multiply"
        clear()
        display.textContent = temporal
        }
})
divideBtn.addEventListener("click", ()=> {
    if (switchA === 0 && switchB === 1){
        switchA = 1
        switchB = 0
        if (temporal === null) {
            result = 0
            temporal = tempA
            console.log(temporal, ":c")
            operator = "divide"
            return
        }
        operate(temporal, operator, a)
        operator = "divide"
        temporal = result
        display.textContent = temporal
        } else if (switchA === 1 && switchB === 0){
        operate(temporal, operator, b)
        temporal = result
        switchA = 0
        switchB = 1
        operator = "divide"
        clear()
        display.textContent = temporal
        }
})


//Display population
const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const numbers = document.querySelectorAll(".number")
const display = document.querySelector(".display")


let temporal = null
let tempA = ""
let tempB = ""

numbers.forEach((number) =>{
    number.addEventListener("click", ()=> {
        if (switchA === 0){
            tempA = tempA + number.textContent
            display.textContent = tempA
            a = tempA 
        } else {
            tempB = tempB + number.textContent
            display.textContent = tempB
            b = tempB
        }
    })
})


//Operate
let result = 0
function operate(firstNum, operator, secondNum){
    firstNum = firstNum * 1
    secondNum = secondNum * 1
    if (operator === "add"){
        result = firstNum + secondNum
    } else if (operator === "subtract"){
        result = firstNum - secondNum
    } else if (operator === "multiply"){
        result = firstNum * secondNum
    }else {
        result = firstNum / secondNum
    }
    console.log(result)
}

//Operate execution
equalBtn.addEventListener("click", () => {
    if (switchA === 0 && switchB === 1){
        operate(temporal, operator, a)
        display.textContent = result
        return result
    } else {
        operate(temporal, operator, b)
        display.textContent = result
        return result
        
    }

})

//Clear function
const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    temporal = null
    clear()
})

function clear(){
    switchA = 0
    switchB = 1
    tempA = ""
    tempB = ""
    a = 0
    b = 0
    display.textContent = "0"
}
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
let b = null
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
    switchA = 1
    display.textContent = "+"
    operator = "add"
    console.log(operator)
})
subtractBtn.addEventListener("click", ()=> {
    switchA = 1
    display.textContent = "-"
    operator = "subtract"
    console.log(operator)
})
multiplyBtn.addEventListener("click", ()=> {
    switchA = 1
    display.textContent = "/"
    operator = "multiply"
    console.log(operator)
})
divideBtn.addEventListener("click", ()=> {
    switchA = 1
    display.textContent = "*"
    operator = "divide"
    console.log(operator)
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
let value = 0

let tempA = ""
let tempB = ""
let switchA = 0
numbers.forEach((number) =>{
    number.addEventListener("click", ()=> {
        if (switchA === 0){
            tempA = tempA + number.textContent
            display.textContent = tempA
            a = tempA
            console.log(tempA, a, "from a")    
        } else {
            tempB = tempB + number.textContent
            display.textContent = tempB
            b = tempB
            console.log(tempB, b, "from b") 
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
    operate(a, operator, b)
    clear()
})

//Clear function
const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    clear()
})

function clear(){
    switchA = 0
    tempA = ""
    tempB = ""
    a = 0
    b = 0
    display.textContent = "0"
}
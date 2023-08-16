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
    display.textContent = a + "+"
    operator = "add"
    console.log(operator)
    } else if (switchA === 1 && switchB === 0){
    operate(a, operator, b)
    temporal = result
    console.log("RESULT IS " + temporal)
    switchA = 0
    switchB = 1
    display.textContent = "+"
    operator = "add"
    console.log(operator)
    clear()
    }
})
subtractBtn.addEventListener("click", ()=> {
    switchA = 1
    display.textContent = "-"
    operator = "subtract"
    console.log(operator)
})
multiplyBtn.addEventListener("click", ()=> {
    switchA = 1
    display.textContent = "*"
    operator = "multiply"
    console.log(operator)
})
divideBtn.addEventListener("click", ()=> {
    switchA = 1
    display.textContent = "/"
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

let temporal = 0
let tempA = ""
let tempB = ""
numbers.forEach((number) =>{
    number.addEventListener("click", ()=> {
        if (temporal !== 0){
            if (switchA === 0){
                tempA = tempA + number.textContent
                display.textContent = tempA
                a = tempA 
                console.log(tempA, a, "from a")
                operate(temporal, operator, a)
                temporal = result   
            } else {
                tempB = tempB + number.textContent
                display.textContent = tempB
                b = tempB
                console.log(tempB, b, "from b")
                operate(temporal, operator, b)
                temporal = result
                console.log("RESULT IS " + result)
                return temporal = result
            }  
        }
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
            //temporal = result
            console.log("RESULT IS " + result)
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
    if (temporal === 0){
        operate(a, operator, b)
        return result
    } else {
        console.log("result is " + result)
        display.textContent = result
        return result
        
    }

})

//Clear function
const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    temporal = 0
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
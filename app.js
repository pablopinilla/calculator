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

addBtn.addEventListener("click", operate)
subtractBtn.addEventListener("click", ()=> {
    operator = "-"
    console.log(operator)
})
multiplyBtn.addEventListener("click", ()=> {
    operator = "*"
    console.log(operator)
})
divideBtn.addEventListener("click", ()=> {
    operator = "/"
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

numbers.forEach((number) =>{
    number.addEventListener("click", ()=> {
        display.textContent = number.textContent
        a = number.textContent
        console.log(a)
    })

})


//Operate

function operate(firstNum, secondNum=null){
    firstNum = a
    if (secondNum === null) {
        numbers.forEach((number) =>{
            number.addEventListener("click", ()=> {
                display.textContent = number.textContent
                secondNum = number.textContent
                console.log(SecondNum)
            })
        
        })
    }
    let result = firstNum + secondNum
    console.log(result, firstNum, secondNum)
}
const number1 = document.querySelector('.number1')
const number2 = document.querySelector('.number2')
const number3 = document.querySelector('.number3')
const number4 = document.querySelector('.number4')
const number5 = document.querySelector('.number5')
const number6 = document.querySelector('.number6')
const number7 = document.querySelector('.number7')
const number8 = document.querySelector('.number8')
const number9 = document.querySelector('.number9')
const number0 = document.querySelector('.number0')
const numberDot = document.querySelector('.numberDot')
const btnAC = document.querySelector('.cutAC')

//operators
let prevNumber;
const addBtn = document.querySelector('.plus-btn')
const substractBtn = document.querySelector('.substract-btn')
const multiplyBtn = document.querySelector('.multiply-btn')
const divideBtn = document.querySelector('.divideBtn')

const inputField = document.querySelector('.input-container')
const mainInput = document.querySelector('.mainInput')
const equalTo = document.querySelector('.equalTo')


number1.addEventListener('click', function () {
    mainInput.innerText += 1
})
number2.addEventListener('click', function () {
    mainInput.innerText += 2
})
number3.addEventListener('click', function () {
    mainInput.innerText += 3
})
number4.addEventListener('click', function () {
    mainInput.innerText += 4
})
number5.addEventListener('click', function () {
    mainInput.innerText += 5
})
number6.addEventListener('click', function () {
    mainInput.innerText += 6
})
number7.addEventListener('click', function () {
    mainInput.innerText += 7
})
number8.addEventListener('click', function () {
    mainInput.innerText += 8
})
number9.addEventListener('click', function () {
    mainInput.innerText += 9
})
number0.addEventListener('click', function () {
    mainInput.innerText += 0
})
numberDot.addEventListener('click', function () {
    if(mainInput.innerText.includes('.',0)){
        return false
    }
    else{
        mainInput.innerText += "."
    }
})

equalTo.addEventListener('click', function () {
    mainInput.innerText = eval(mainInput.innerText)
})

addBtn.addEventListener('click', function () {

    if(mainInput.innerText.includes('+',0)){
        return false
    }
    else{
        mainInput.innerText += '+'
    }
    
})
substractBtn.addEventListener('click', function () {

    if(mainInput.innerText.includes('-',0)){
        return false
    }
    else{
        mainInput.innerText += '-'
    }

})
multiplyBtn.addEventListener('click', function () {

    if(mainInput.innerText.includes('*',0)){
        return false
    }
    else{
        mainInput.innerText += '*'
    }

})
divideBtn.addEventListener('click', function () {

    if(mainInput.innerText.includes('/',0)){
        return false
    }
    else{
        mainInput.innerText += '/'
    }

})

btnAC.addEventListener('click', function () {
    mainInput.innerText = ""
})
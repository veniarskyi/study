let num = 42; //number
let firstName = 'Pasha' //string
const isProgrammer = true //boolean

/*Can Do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' //не прийнято
let myNum = 34 //прийнято
let num42 = 10
*/

/*Restricred
let 42num = '11'
let my-num = 1
let false 
*/


//firstName = 'Max'
//isProgrammer = false //error because of const

//alert(firstName)
//console.log('Test:', num, isProgrammer)

///console.log(num + 10)
//console.log(num - 10)
//console.log(num * 10)
//console.log(num / 10)

//let num2 = num + 10
//console.log(num, num2)
//num = num2 + 1
//num2 = num2 + 1
//console.log(num, num2)

//let num3 = num + (10 * 2) / 5 - 2
//console.log(num3)

//const fullName = firstName + ' Nhik'
//console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'
//console.log(resultElement.textContent)
//resultElement.textContent = 42

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = "-"
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumberWithAction(val1, val2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    //if (actionSymbol == '+') {
    //    num1 + num2
    //     return num1 + num2
    //}

    //if (actionSymbol == '-') {
       // num + num2
    //}
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}


submitBtn.onclick = function () {
   const result = computeNumberWithAction(input1, input2, action)
   printResult(result)
}
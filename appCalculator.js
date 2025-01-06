const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let noComasCalculation = ['_']

function calculate(btn) {
    console.log('you clicked on', btn.textContent)
    //get the button value and save it in the calculation array
    const buttonValue = btn.textContent
        //set back the screen and calculation if click on clear
    if (buttonValue === 'Clear') {
        calculation = []
        screenDisplay.textContent = '_'
        // if click on = eval will evluate no matters what
    } else if (buttonValue == '=') {
        screenDisplay.textContent = eval(noComasCalculation)
        console.log(screenDisplay.textContent)
    }else {

    calculation.push(buttonValue)
    //show the calculation on the screenDisplay
    noComasCalculation = calculation.join('')
    screenDisplay.textContent = noComasCalculation
    }

}
buttons.forEach(btn => btn.addEventListener('click', () => calculate(btn)))
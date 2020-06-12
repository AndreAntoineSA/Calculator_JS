const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput(){
    return parseInt(usrInput.value);
}

function writeOutput(operator,beforeCalc,aftercalc){
    const calcDescription = `${beforeCalc} ${operator} ${aftercalc}`;
    outputResult(currentResult,calcDescription);
}
function add(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult += enteredNumber;
    writeOutput('+',secondNumber,enteredNumber)
    
}
function sub(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult -= enteredNumber;
    writeOutput('-',secondNumber,enteredNumber)

}

function mul(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult *= enteredNumber;
    writeOutput('*',secondNumber,enteredNumber)
}

function div(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult /= enteredNumber;
    writeOutput('/',secondNumber,enteredNumber)
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);

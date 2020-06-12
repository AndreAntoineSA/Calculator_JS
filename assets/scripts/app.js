const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput(){
    return parseInt(usrInput.value);
}

function writeOutput(operator,beforeCalc,aftercalc){
    const calcDescription = `${beforeCalc} ${operator} ${aftercalc}`;
    outputResult(currentResult,calcDescription);
}
function writeLog(operate , entry1, entry2, calc){
    const logEntry ={
        op : operate,
        num1 : entry1,
        num2 : entry2,
        result : calc,
    };                      //object creation 
    console.log(logEntry.op);
    logEntries.push(logEntry);
    console.log(logEntries);
}
function add(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult += enteredNumber;
    writeOutput('+',secondNumber,enteredNumber);
    writeLog('ADD',secondNumber,enteredNumber,currentResult);
    
    
}
function sub(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult -= enteredNumber;
    writeOutput('-',secondNumber,enteredNumber);
    writeLog('SUB',secondNumber,enteredNumber,currentResult);

}

function mul(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult *= enteredNumber;
    writeOutput('*',secondNumber,enteredNumber);
    writeLog('MULTIPLY',secondNumber,enteredNumber,currentResult);
}

function div(){
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    currentResult /= enteredNumber;
    writeOutput('/',secondNumber,enteredNumber);
    writeLog('DIVIDE',secondNumber,enteredNumber,currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);

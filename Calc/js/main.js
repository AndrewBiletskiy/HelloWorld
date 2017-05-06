//VARIABLES
var btnNumbers = document.querySelectorAll('.number'),
    btnOperations = document.querySelectorAll('.operator'),
    btnDecimal = document.getElementById('decimal'),
    btnClean = document.getElementById('CE'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
//EVENTS BEGIN
for(var i=0; i<btnNumbers.length; i++) {
    var bNumber = btnNumbers[i];
    bNumber.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
}
for(var i=0; i<btnOperations.length; i++) {
    var bOperation = btnOperations[i];
    bOperation.addEventListener('click', function (e) {
       operation(e.target.textContent)})
}
btnDecimal.addEventListener('click', decimal);
btnClean.addEventListener('click', clear);
//FUNCTION BEGIN
function numberPress(number) {
    if(MemoryNewNumber){
        display.value = number;
        MemoryNewNumber = false;
    }else{
    if(display.value ==="0"){
        display.value = number;
    }else{
    display.value += number;
    }
}
};

function operation(op) {
   var localOperationMemory = display.value;

    if(MemoryNewNumber && MemoryPendingOperation !== '='){
        display.value = MemoryCurrentNumber;
    }else {
        MemoryNewNumber = true;
        if(MemoryPendingOperation === '+'){
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if(MemoryPendingOperation === '-'){
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if(MemoryPendingOperation === '/'){
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if(MemoryPendingOperation === '*'){
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else{
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };

        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op
    };
};

function decimal(point) {
    var localDecimalMemory = display.value;
    if(MemoryNewNumber){
        localDecimalMemory = '0.'
        MemoryNewNumber = false
    }else{
        if(localDecimalMemory.indexOf('.') === -1){
            localDecimalMemory += "."
        }
    };
    display.value = localDecimalMemory;
};

function clear(id) {
        display.value='0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation ="";
}
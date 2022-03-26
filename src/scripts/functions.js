// TODO - при нажатии точки с пустым дисплеем вводится 0. и не получается ввести еще один ноль
// TODO - сделать работу радиокнопок toPrecision

// * declaring variables
const dataInit = () => {
    return Object.create({
        operand: '',
        memory: 0,
        operation: '',
    });
};

const data = dataInit();
const calcDisplay = document.getElementById('calc__display');
const memoryDisplay = document.getElementById('calc__memory__display');
const clear = document.getElementById('clear');
const summary = document.getElementById('sum');
const subtraction = document.getElementById('diff');
const multi = document.getElementById('mult');
const divide = document.getElementById('div');
const dot = document.getElementById('dot');
const plusMinus = document.getElementById('plusMinus');
const result = document.getElementById('result');
const bksp = document.getElementById('bksp');
const sqrt = document.getElementById('sqrt');
const pow2 = document.getElementById('pow2');
const powX = document.getElementById('powX');
const memPlus = document.getElementById('memPlus');
const memClear = document.getElementById('memClear');
const memSubtract = document.getElementById('memSubtract');
const numKeysCollection = document.getElementsByClassName('button__number');
const zeroButton = document.getElementById('button__number__zero');
const doubleZeroButton = document.getElementById('button__number__doubleZero');
const precisionCollection = document.getElementsByClassName('precisionValue');

// * declaring functions
const functions = {
    clear: () => {
        dataInit();
        calcDisplay.innerText = '';
    },
    displayContentToNumber: () => {
        const toNumber = Number(calcDisplay.innerText);
        return toNumber;
    },
    // * math operations
    summary: () => {
        data.operand = Number(calcDisplay.innerText);
        calcDisplay.innerText = '';
        data.operation = '+';
        console.log(data.operand);
    },
    subtraction: () => {
        data.operand = Number(calcDisplay.innerText);
        calcDisplay.innerText = '';
        data.operation = '-';
    },
    multiplication: () => {
        data.operand = Number(calcDisplay.innerText);
        calcDisplay.innerText = '';
        data.operation = '*';
    },
    divide: () => {
        data.operand = Number(calcDisplay.innerText);
        calcDisplay.innerText = '';
        data.operation = '/';
    },

    dot: () => {
        if (calcDisplay.innerText === '') {
            calcDisplay.innerText = '0.';
        }
        if (!calcDisplay.innerText.includes('.')) {
            calcDisplay.innerText += '.';
            data.operand += '.';
        }
    },
    // @ts-ignore
    calculate: (arg1, oper, arg2) => {
        switch (oper) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return arg1 / arg2;
        default: return false;
        };
    },
    result: () => {
        calcDisplay.innerText = functions.calculate(data.operand, data.operation, Number(calcDisplay.innerText));
    },

    reverseSign: () => {
        // @ts-ignore
        if (calcDisplay.innerText !== '' || calcDisplay.innerText !== 0) {
            // @ts-ignore
            calcDisplay.innerText -= 2 * calcDisplay.innerText;
            console.log(typeof calcDisplay.innerText);
        }
    },
    sqrt: () => {
        const sqrtResult = Math.sqrt(functions.displayContentToNumber()).toPrecision(5);
        calcDisplay.innerHTML = sqrtResult;
    },
    bksp: () => {
        const slicer = calcDisplay.innerText.slice(0, calcDisplay.innerText.length - 1);
        calcDisplay.innerHTML = slicer;
    },
    pow2: () => {
        calcDisplay.innerText = String(functions.displayContentToNumber() ** 2);
    },
    powX: () => {
        data.operand = calcDisplay.innerText;
        calcDisplay.innerText += '**';
    },
    memPlus: () => {
        data.memory += Number(calcDisplay.innerText);
        memoryDisplay.innerText = data.memory;
        calcDisplay.innerText = '';
    },
    memClear: () => {
        data.memory = 0;
        memoryDisplay.innerText = data.memory;
    },
    memSubtract: () => {
        data.memory -= Number(calcDisplay.innerText);
        memoryDisplay.innerText = data.memory;
        calcDisplay.innerText = '';
    },
    // @ts-ignore
    zeroButton: evt => {
        if (calcDisplay.innerText === '' || calcDisplay.innerText[0] === '0') {
            console.log('error!');
        } else {
            calcDisplay.innerHTML += evt.target.value;
        }
    },
    // @ts-ignore
    doubleZeroButton: evt => {
        if (calcDisplay.innerText === '' || calcDisplay.innerText[0] === '0') {
            console.log('error!');
        } else {
            calcDisplay.innerHTML += evt.target.value;
        }
    },

};

// * adding event listeners
for (let i = 0; i < numKeysCollection.length; i++) {
    numKeysCollection[i].addEventListener('click', () => {
        // @ts-ignore
        // todo - разобраться с этой мутной конструкцией
        if (data.operand === '') {
            // @ts-ignore
            const thisValue = numKeysCollection[i].value;
            calcDisplay.innerHTML += thisValue;
        } else {
            // @ts-ignore
            const thisValue = numKeysCollection[i].value;
            calcDisplay.innerHTML += thisValue;
        }
    });
};

for (let i = 0; i < precisionCollection.length; i++) {
    precisionCollection[i].addEventListener('click', () => {
        // @ts-ignore
        data.operand.toPrecision(this.value);
        Number(calcDisplay.innerText).toPrecision(this.value);
    });
}

clear.addEventListener('click', functions.clear);
summary.addEventListener('click', functions.summary);
subtraction.addEventListener('click', functions.subtraction);
multi.addEventListener('click', functions.multiplication);
divide.addEventListener('click', functions.divide);
dot.addEventListener('click', functions.dot);
result.addEventListener('click', functions.result);
plusMinus.addEventListener('click', functions.reverseSign);
bksp.addEventListener('click', functions.bksp);
sqrt.addEventListener('click', functions.sqrt);
pow2.addEventListener('click', functions.pow2);
powX.addEventListener('click', functions.powX);
memPlus.addEventListener('click', functions.memPlus);
memSubtract.addEventListener('click', functions.memSubtract);
memClear.addEventListener('click', functions.memClear);
zeroButton.addEventListener('click', functions.zeroButton);
doubleZeroButton.addEventListener('click', functions.doubleZeroButton);

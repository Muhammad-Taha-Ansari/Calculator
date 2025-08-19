
document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    const history = document.querySelector('.history');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let currentOperation = '';
    let historyText = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                clear();
            } else if (buttonText === 'DEL') {
                deleteLast();
            } else if (buttonText === '=') {
                evaluate();
            } else {
                addToInput(buttonText);
            }
        });
    });

    function clear() {
        currentInput = '';
        currentOperation = '';
        historyText = '';
        updateScreen();
    }

    function deleteLast() {
        currentInput = currentInput.slice(0, -1);
        updateScreen();
    }
    
    function addToInput(value) {
        if (value === '.' && currentInput.includes('.')) return;
        currentInput += value;
        updateScreen();
    }

    function evaluate() {
        if (currentInput === '') return;
        try {
            const result = eval(currentInput);
            historyText = `${currentInput} = ${result}`;
            currentInput = result;
            currentOperation = '';
            updateScreen();
        } catch (error) {
            historyText = 'Error';
            currentInput = '';
            updateScreen();
        }
    }
    
    function updateScreen() {
        screen.textContent = currentInput;
        history.textContent = historyText;
    }
});
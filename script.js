document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');
    
    let currentInput = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;
            
            if (value === 'C') {
                currentInput = '';
                inputBox.value = '';
            } else if (value === 'DEL') {
                currentInput = currentInput.slice(0, -1);
                inputBox.value = currentInput;
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    inputBox.value = currentInput;
                } catch (error) {
                    inputBox.value = 'Error';
                }
            } else if (value === '()') {
                // Handle parentheses logic
                if (currentInput.includes('(') && !currentInput.includes(')')) {
                    currentInput += ')';
                } else {
                    currentInput += '(';
                }
                inputBox.value = currentInput;
            } else {
                currentInput += value;
                inputBox.value = currentInput;
            }
        });
    });
});

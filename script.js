function executeFunction() {
    const selectedFunction = document.getElementById('functionSelector').value;
    const inputValue = document.getElementById('inputValue').value;
    let result = "";

    if (!inputValue || isNaN(inputValue)) {
        result = "Please enter a valid number.";
    } else {
        switch (selectedFunction) {
            case "fibonacci":
                result = generateFibonacci(inputValue);
                break;
            case "armstrong":
                result = isArmstrong(inputValue) ? "It is an Armstrong number." : "It is not an Armstrong number.";
                break;
            case "reverse":
                result = reverseNumber(inputValue);
                break;
            default:
                result = "Please select a valid function.";
        }
    }

    document.getElementById('result').innerText = result;
}

//fibonacci
function generateFibonacci(n) {
    n = parseInt(n);
    if (n <= 0) return "Please enter a positive number.";
    
    let n1 = 0, n2 = 1, nextTerm;
    let series = [n1];
    
  
    if (n === 1) return series.join(', ');

    series.push(n2);

    for (let i = 2; i < n; i++) {
        nextTerm = n1 + n2;
        series.push(nextTerm);
        n1 = n2;
        n2 = nextTerm;
    }

    return series.join(', ');
}

//armstrong or not
function isArmstrong(num) {
    const digits = num.toString().split('');
    const numOfDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numOfDigits), 0);
    return sum === parseInt(num);
}

//reverse number
function reverseNumber(num) {
    return num.toString().split('').reverse().join('');
}


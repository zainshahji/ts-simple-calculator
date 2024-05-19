"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Operation;
(function (Operation) {
    Operation[Operation["ADD"] = 0] = "ADD";
    Operation[Operation["SUBTRACT"] = 1] = "SUBTRACT";
    Operation[Operation["MULTIPLY"] = 2] = "MULTIPLY";
    Operation[Operation["DIVIDE"] = 3] = "DIVIDE";
})(Operation || (Operation = {}));
var Calculator = /** @class */ (function () {
    function Calculator(num1, num2, operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }
    Calculator.prototype.calculate = function () {
        switch (this.operation) {
            case Operation.ADD:
                return this.num1 + this.num2;
            case Operation.SUBTRACT:
                return this.num1 - this.num2;
            case Operation.MULTIPLY:
                return this.num1 * this.num2;
            case Operation.DIVIDE:
                if (this.num2 === 0) {
                    throw new Error('Division by zero is not allowed');
                }
                return this.num1 / this.num2;
            default:
                throw new Error('Invalid operation');
        }
    };
    return Calculator;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the first number: ', function (num1) {
    rl.question('Enter the second number: ', function (num2) {
        rl.question('Enter the operation (+, -, *, /): ', function (operation) {
            var num1Num = parseFloat(num1);
            var num2Num = parseFloat(num2);
            var operationEnum;
            switch (operation) {
                case '+':
                    operationEnum = Operation.ADD;
                    break;
                case '-':
                    operationEnum = Operation.SUBTRACT;
                    break;
                case '*':
                    operationEnum = Operation.MULTIPLY;
                    break;
                case '/':
                    operationEnum = Operation.DIVIDE;
                    break;
                default:
                    throw new Error('Invalid operation');
            }
            var calculator = new Calculator(num1Num, num2Num, operationEnum);
            console.log("Result: ".concat(calculator.calculate()));
            rl.close();
        });
    });
});

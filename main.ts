import * as readline from 'readline';

enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE
}

class Calculator {
  private num1: number;
  private num2: number;
  private operation: Operation;

  constructor(num1: number, num2: number, operation: Operation) {
    this.num1 = num1;
    this.num2 = num2;
    this.operation = operation;
  }

  calculate(): number {
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
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1: string) => {
  rl.question('Enter the second number: ', (num2: string) => {
    rl.question('Enter the operation (+, -, *, /): ', (operation: string) => {
      const num1Num = parseFloat(num1);
      const num2Num = parseFloat(num2);
      let operationEnum: Operation;

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

      const calculator = new Calculator(num1Num, num2Num, operationEnum);
      console.log(`Result: ${calculator.calculate()}`);
      rl.close();
    });
  });
});
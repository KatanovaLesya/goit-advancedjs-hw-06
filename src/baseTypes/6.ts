/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// Функція приймає рядок і повертає значення типу void
function showMessage(message: string): void {
  console.log(message);
}

// Функція приймає два числових аргументи і повертає їх суму 
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, яка не повертає значення, але генерує помилку 
function customError(): never {
  throw new Error('Error');
}


export {};
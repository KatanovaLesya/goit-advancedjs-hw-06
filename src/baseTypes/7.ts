/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// Enum для днів тижня
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Функція для перевірки, чи є день вихідним
function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

console.log(isWeekend(DayOfWeek.Monday)); 
console.log(isWeekend(DayOfWeek.Saturday)); 
console.log(isWeekend(DayOfWeek.Sunday)); 

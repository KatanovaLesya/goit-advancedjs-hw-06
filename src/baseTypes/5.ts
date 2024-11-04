/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

//для значення, яке може бути рядком або числом
let union: string | number;

//для значення, яке може бути тільки 'enable' або 'disable'
let literal: 'enable' | 'disable';

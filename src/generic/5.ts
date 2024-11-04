/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const numberStringPair: KeyValuePair<number, string> = {
  key: 1,
  value: "One",
};

const stringBooleanPair: KeyValuePair<string, boolean> = {
  key: "isActive",
  value: true,
};

console.log(numberStringPair); 
console.log(stringBooleanPair); 


export {};
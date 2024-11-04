/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends Pick<AllType, keyof AllType>>(
  top: T,
  bottom: T
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}


const result = compare(
  { name: 'TopName', color: 'red', position: 1, weight: 100 },
  { name: 'BottomName', color: 'blue', position: 2, weight: 200 }
);

console.log(result);


export {};
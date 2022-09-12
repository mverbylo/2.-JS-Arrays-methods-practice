// Работа с concat
// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr11 = [1, 2, 3];
const arr12 = [4, 5, 6];
const arr13 = arr11.concat(arr12); //[1, 2, 3, 4, 5, 6]

// Работа с reverse
// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arr2 = [1, 2, 3];
arr2.reverse(); //[3, 2, 1]

// Работа с push, unshift
// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6); //[1, 2, 3, 4, 5, 6]

// 4.Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6); //[4, 5, 6, 1, 2, 3]

// Работа с shift, pop
// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
const arr5 = ['js', 'css', 'jq'];
const arr5FirstElem = console.log(arr5.shift()); //js
//arr5=['css', 'jq']

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
const arr6 = ['js', 'css', 'jq'];
const art6LastElem = console.log(arr6.pop()); //jq
//arr6=['js', 'css']

// Работа с slice
// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arr71 = [1, 2, 3, 4, 5];
const arr72 = arr71.slice(0, 3); //[1, 2, 3]

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arr81 = [1, 2, 3, 4, 5];
const arr82 = arr81.slice(3); //[4, 5]

// Работа с splice
// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
//arr9 = [1, 4, 5]

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arr101 = [1, 2, 3, 4, 5];
const arr102 = arr101.splice(1, 3);
//arr102 = [2, 3, 4]

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr111 = [1, 2, 3, 4, 5];
arr111.splice(3, 0, 'a', 'b', 'c');
//arr111 = [1, 2, 3, 'a', 'b', 'c', 4, 5]

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr121 = [1, 2, 3, 4, 5];
arr121.splice(1, 0, 'a', 'b');
arr121.splice(6, 0, 'c');
arr121.splice(8, 0, 'e');
//arr121 =[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// Работа с sort
// 13.Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr131 = [3, 4, 1, 2, 7];
arr131.sort(); //[1, 2, 3, 4, 7]

// Работа с forEach
// 14. Дан массив со следующими объектами внутри ...
// Для каждого элемента выведите сообщение в консоль типа
// “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”

const users14 = [
  { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: "Test'ya", lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: "Consol'evna", age: 42, gender: 'female' },
];

users14.forEach(function (elem) {
  console.log(
    `Пользователь ${elem.firstName} ${elem.lastName} является ${elem.gender} и ему сейчас ${elem.age} лет`
  );
});
// Пользователь Test Testovich является male и ему сейчас 42 лет
// Пользователь User Userovich является male и ему сейчас 12 лет
// Пользователь Test'ya Testovna является female и ему сейчас 16 лет
// Пользователь Logina Consol'evna является female и ему сейчас 42 лет

// Работа с map
// 15.Дан массив со следующими объектами внутри:
// Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве
// свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).
const users15 = [
  { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: "Test'ya", lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: "Consol'evna", age: 42, gender: 'female' },
];
const newUsers15 = users15.map(function (elem) {
  const newUsers15 = structuredClone(elem);
  newUsers15.telephoneNumber = 1234567;
  return newUsers15;
});

// Работа с filter
// 16.Дан массив со следующими объектами внутри:
// Создайте новый массив на основании старого массива, в котором будут
// только те совершеннолетние пользователи, у которых будет определенный пол.
const users16 = [
  { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: "Test'ya", lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: "Consol'evna", age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefinovich', age: 99 },
  { firstName: 'Null', lastName: 'Nullovich', gender: 'male' },
];
const users16New = users16.filter(function (elem) {
  return elem.age >= 18 && elem.gender;
});
// {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male'}
// {firstName: 'Logina', lastName: "Consol'evna", age: 42, gender: 'female'}

// Работа с flat
// 17. Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]].
// Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.
const arr171 = [1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]];
const arr172 = arr171.flat(Infinity);
// [1, 2, 3, 10, 20, 30, 100, 200, 300, 1000, 2000, 3000]

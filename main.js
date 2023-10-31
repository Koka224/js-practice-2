// 1) На forEach:

// - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

// - Дан массив с числами. Найдите сумму этих чисел.
// 1
// const numbersMulti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbersMulti.forEach(function (number) {
//   const res = number * number;
//   console.log(`Квадрат числа: ${res}`);
// });

// 2
// const numbersPlus = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = 0;
// numbersPlus.forEach(function (numberPlus) {
//   result = result + numberPlus;
// });
// console.log(`Сумма элементов в массиве ${result}`);
// 2) На map:

// - Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// const squareMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squareMapDoub = squareMap.map(function (squareNum) {
//   return squareNum * squareNum;
// });
// console.log(squareMapDoub);
// 3) На reverse:

// - Дан массив с днями недели ['Понедельник', 'Вторник'...]. Сделайте так, что он начинался с воскресенья и заканчивался понедельником.
// const week = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];
// week.reverse();
// console.log(week);
// 4) На split и join:

// - C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"

// - Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// - В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
// 1
// const a = [3, 2, 1];
// const result = a.join(" > ");
// console.log(result);
// 2
// const b = "я учу javascript!";
// const res = b.split(` `);
// console.log(res);
// 3
// const date = "2025-12-31";
// const dateDoub = date.split("-");
// const c = dateDoub[2] + "." + dateDoub[1] + "." + dateDoub[0];

// console.log(c);
// 5) На filter:

// - Дан массив с числами. Оставьте в нем только отрицательные числа. В отдельную переменную положите количество отрицательных чисел в этом массиве.

// - Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// 1
// const SumFilt = [1, -2, 3, -4, 5, -6, 7, 8, 9];
// const SumFilter = SumFilt.filter(function (itemMin) {
//   return itemMin < 0;
// });

// const t2 = SumFilter.length;
// console.log(SumFilter);
// console.log(`Количество отрицательных чисел: ${t2}`);
// 2
const ArrFilt = [
  "Nma",
  "Paa",
  "dicnecenmcoer",
  "bhg",
  "kmujnyhbgvf",
  "sxfdcgbh,k",
];
const ArrFilter = ArrFilt.filter(function (aer) {
  return aer.length > 5;
});
const bi = ArrFilter;
console.log(bi);

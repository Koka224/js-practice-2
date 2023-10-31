// 1) На forEach:

// - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

// - Дан массив с числами. Найдите сумму этих чисел.
// 1
const numbersMulti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersMulti.forEach(function (number) {
  const res = number * number;
  console.log(`Квадрат числа: ${res}`);
});

// 2
const numbersPlus = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 0;
numbersPlus.forEach(function (numberPlus) {
  result = result + numberPlus;
});
console.log(`Сумма элементов в массиве ${result}`);

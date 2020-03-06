  // Создайте функцию, которая возвращает промис getRandomChinese(length). Функция работает следующим образом:

  // Запускается цикл(подсказка: можно использовать while) length раз,
  //  каждый проход цикла смотрим на последние 5 цифр результата вызова метода Date.now() Например получили const sign = 16086;.
  // Конвертируем полученныую цифру в строку String.fromCharCode(sign); и ждем 50 ms

  // Функция gerRandomChinese(length) должна вернуть строку длинной (length) с китайскими иероглифами.
  //  Время работы промиса должно составлять length * 50ms.
  // (Если вызвать getRandomChinese(4), получим результат "촛궻簽紙" за 200ms

  function getRandomChinese(length){
    
    let result = [];
    let i = 0;

    while(i < length){
      i++;
      const sign = `${Date.now()}`.slice(-5);
      console.log(sign);
      result.push(String.fromCharCode(sign));
      // setInterval(() => , 500);

    } 
    return result.join("");   
  }


console.log(getRandomChinese(4));

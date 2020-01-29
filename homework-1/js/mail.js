const CURRENCY = `₴`;
let price = {
    apple: 15.678,
    banana: 123.965,
    pineapple: 90.2345
};
let sum = price.apple + price.banana + price.pineapple;
let sumMedium = sum/3;
let randomValue = Math.random();
document.writeln(`
    <p>Максимальна ціна ${Math.max(price.apple, price.banana, price.pineapple)}${CURRENCY}</p>
    <p>Мінімальна ціна ${Math.min(price.apple, price.banana, price.pineapple)}${CURRENCY}</p>
    <p>Сума всіх товарів ${sum}${CURRENCY}</p>
    <p>Сума всіх товарів ${Math.floor(sum)}${CURRENCY} (Заокруглення в меншу сторону)</p>
    <p>Сума всіх товарів ${Math.round(sum/100)*100}${CURRENCY} (Заокруглення до сотень)</p>
    <p>Чи парна сума (${Math.floor(sum)}) - "${Math.floor(sum)/2 == 0}"</p>
    <p>Решта з 500${CURRENCY} = ${(500 - sum)}${CURRENCY}</p>
    <p>Середнє значення ${+sumMedium.toFixed(2)}${CURRENCY} (Заокруглення до другого знака після коми)</p>
    <p>Сума всіх товарів зі знижкою (${randomValue*100}%) ${+(sum - (sum*randomValue)).toFixed(2)}${CURRENCY} (Заокруглення до другого знака після коми)</p>
    <p>Втрачена вигода ${sum/2 - sum*randomValue}${CURRENCY}</p>
`);

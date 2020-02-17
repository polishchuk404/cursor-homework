const arrNambers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

// 1
function getRandomArray(length, min, max){
    let randomArr = [];
    for (let i = 0; i < length; i++) {
        randomArr[i] = [Math.floor(Math.random() * max + min)];
    }
    return randomArr;
}

// 3
function getAverage(numbers){
    return numbers.reduce((a, b) => a + b, 0)/numbers.length;
}

// 4
function getMedian(numbers){
    let median = 0;
    let = numsLen = numbers.length;
    numbers.sort();
    if (numsLen % 2 === 0){
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else {
        median = numbers[(numsLen - 1) / 2];
    }
    return median;
}

// 5
function filterEvenNumbers(numbers){    
    return numbers.filter(something => something % 2 === 1).join(", ");
}

// 6
function countPositiveNumbers(numbers){
    return (numbers.filter(something => something > 0)).length;
}

// 7
function getDividedByFive(numbers){
    return numbers.filter(something => something % 5 === 0).join(", ");
}
document.writeln(`  
<p>Функція №1: (${getRandomArray(15, 1, 100).join(", ")})</p>
<p>Функція №3: (${getAverage(arrNambers)})</p>
<p>Функція №4: (${getMedian(arrNambers)})</p>
<p>Функція №5: (${filterEvenNumbers(arrNambers)})</p>
<p>Функція №6: (${countPositiveNumbers(arrNambers)})</p>
<p>Функція №7: (${getDividedByFive(arrNambers)})</p>
                  `);

                  
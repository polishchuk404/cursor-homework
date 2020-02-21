const arrNambers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

// 1
function getRandomArray(length, min, max){
    let randomArr = [];
    for (let i = 0; i < length; i++) {
        randomArr[i] = [Math.floor(Math.random() * max + min)];
    }
    return randomArr;
}

// 2
function getModa(numbers){
    let result = [];
    number = numbers.sort( (a, b) => a - b );
    for(let i = 0; i < number.length; i++) {
        if((numbers[i] ^ 0) === numbers[i]) {
            if(number[i] === number[++i]) {
                if(number[i] === number[++i]) {
                    result.push(number[i]);
                }
            }
        }
    }
    return result;
}

// 3
function getAverage(numbers){
    result = numbers.filter(value => (parseFloat(value) - parseInt(value) === 0));
    return (result.reduce((a, b) => a + b, 0)/result.length).toFixed(2);
}

// 4
function getMedian(numbers){
    numbersFilt = numbers.filter(value => (parseFloat(value) - parseInt(value) === 0));
    numbersFilt.sort((a,b) =>  a - b);
    if (numbersFilt.length % 2 == 1 ){
        median = numbersFilt[Math.floor(numbersFilt.length/2)];       
    }
    else {
        median = ((numbersFilt[numbersFilt.length/2] + numbersFilt[numbersFilt.length/2-1])/2);
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

// 8
const notCensorshipText = `"Are you fucking kidding?", "Holy shit!", "It's bullshit!"`;
function replaceBadWords(string){
    return string.replace(/(fuck|shit)/g, "****");
}

document.writeln(`  
<p>Функція №1: (${getRandomArray(15, 1, 100).join(", ")})</p>
<p>Функція №2: (${getModa(arrNambers)})</p>
<p>Функція №3: (${getAverage(arrNambers)})</p>
<p>Функція №4: (${getMedian(arrNambers)})</p>
<p>Функція №5: (${filterEvenNumbers(arrNambers)})</p>
<p>Функція №6: (${countPositiveNumbers(arrNambers)})</p>
<p>Функція №7: (${getDividedByFive(arrNambers)})</p>
<p>Функція №8: (${replaceBadWords(notCensorshipText)})</p>
                  `);

                  
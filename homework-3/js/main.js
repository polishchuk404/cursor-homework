function getMaxDigit(number) {
    number = number.toString();
    let max = 0;
    for (let i = 0; i < number.length; i++) {
    if (max < number[i]) {
        max = number[i];
        }
    }
    return max;
}
function getDegree(number, n){
    let result = number;
    for (let i = 1; i < n; i++) {
        result *= number;
    }
    return result;
}
function getFormatName(name) {
    name = name.toLowerCase();
    let mainLeter = name[0].toUpperCase();
    let str = name.slice(1, name.length);
    return mainLeter + str;
}
function getCountLetter(str, letter){
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
function deleteLetter(str, letter) {
    str = str.toLowerCase();
    str = str.split(letter).join('');
    return str;
}
function getPalindrome(str) {
    let result = true;
    str = str.toLowerCase();
    str = str.split(' ').join('');
    let strReverse = str.split('').reverse().join('');
    if (str !== strReverse){
        return false;
    }
    return result;
}
function deleteDuplicateLetter(str) {
    let result = "";
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
        result += str[i];
      }
    }
    return result;
}
document.writeln(`  <p>Функція №1: ${getMaxDigit(4567)}</p>
                    <p>Функція №2: ${getDegree(4,3)}</p>
                    <p>Функція №3: ${getFormatName("ВаДиМ")}</p>
                    <p>Функція №6: ${getCountLetter("Асталависта", "а")}</p>
                    <p>Функція №9: ${deleteLetter("blablabla", "a")}</p>
                    <p>Функція №10: ${getPalindrome("Аргентина манит негра")}</p>
                    <p>Функція №11: ${deleteDuplicateLetter("Бисквит был очень нежный")}</p>
                    `);
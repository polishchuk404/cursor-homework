const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];

// 1
function getSubjects(student){
    let result = [];
    Object.keys(student.subjects).forEach(value => result.push(value[0].toUpperCase() + value.slice(1,value.length).replace("_", " ")));
    return  result.join(", ");
}
// 2
function getAverageMark(student){
    let result = Object.values(student.subjects).flat();
    return (result.reduce((a, b) => (a + b), 0) / result.length).toFixed(2);
}
// 3
function getStudentInfo(student){
    let result = [`"name": ${student.name}`, `"course": ${student.course}`, `"averageMark": ${getAverageMark(student)}`]
    return  result.join(", ");
}
// 4
function getStudentsNames(students){
    return  students.map( value => value.name).sort().join(", ");
}
// 5
function getBestStudent(students){
    let studentsMarks = students.map( value => [value.name, getAverageMark(value)]);
    let marks = studentsMarks.map(value => value[1]);
    return  studentsMarks[marks.indexOf(`${Math.max.apply(null, marks)}`)].join(", ");
}
// 6
function calculateWordLetters(word){
    result = {};
    for (let i = 0; i < word.length; i++){
        if (!Object.keys(result).includes(word[i])){
            result[word[i]] = 1;
        }else result[word[i]] += 1;
    }
    return Object.entries(result).join(", ");
}
document.writeln(`
<p>Функція №1: (${getSubjects(students[0])})</p>
<p>Функція №2: (${getAverageMark(students[0])})</p>
<p>Функція №3: (${getStudentInfo(students[0])})</p>
<p>Функція №4: (${getStudentsNames(students)})</p>
<p>Функція №5: (${getBestStudent(students)})</p>
<p>Функція №6: (${calculateWordLetters("тест")})</p>
                  `);

                  
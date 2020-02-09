const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
const random = [Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1)];
function getPair(students){
    let pair = [
        [students[0], students[2]].join(" и "), 
        [students[1], students[3]].join(" и "), 
        [students[4], students[5]].join(" и ")];
    return pair;
}
let pair = getPair(students);
function getThemes(pair, themes){
    let pairThemes = [];
    for (let i = 0; i < pair.length; i++) {
        pairThemes[i] = [pair[i], themes[i]].join(" - ");
    }
    return pairThemes;
}
let pairThemes = getThemes(pair, themes);
function getMarks(students, marks){
    let studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsMarks[i] = [students[i], marks[i]].join(" - ");
    }
    return studentsMarks;
}
let studentsMarks = getMarks(students, marks);
function getRandomMarks(pair){
    let randomMarks = [];
    for (let i = 0; i < pair.length; i++) {
        randomMarks[i] = [pair[i], random[i]].join(" - ");
    }
    return randomMarks;
}
let randomMarks = getRandomMarks(pair);
document.writeln(`  
<p><b>Студенты:</b><br> ${students.join(", ")}.</p>
<p><b>Темы:</b><br> ${themes.join(", ")}.</p>
<p><b>Оценки:</b><br> ${marks.join(", ")}.</p>
<p><b>Разбейте студентов на пары(парень + девушка) для работы над проектом.</b><br> ${pair.join(";<br>")}.</p>
<p><b>Сопоставьте пары из предыдущего задания и темы проектов, над которым студенты будут работать.</b><br>${pairThemes.join(";<br> ")}.</p>
<p><b>Сопоставьте оценки(marks) со студентом(students)</b><br>${studentsMarks.join(";<br> ")}.</p>
<p><b>Поставьте каждой паре случайную оценку(от 1 до 5) за проект.</b><br> ${randomMarks.join(";<br>")}.</p>
`);
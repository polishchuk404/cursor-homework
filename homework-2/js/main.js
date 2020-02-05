let N = null;
do {
  N = Math.round(+prompt(`Enter the number "N"`, ``));
} while (isNaN(N) || N == 0);
let M = null;
do {
    M = Math.round(+prompt(`Enter the number "M"`, ``));
} while (isNaN(M) || M <= N){
}
let skipEven = confirm("Skip even numbers?");
let sum = 0;
for (let i = N; i <= M; i++){
  if (skipEven){
    if (i % 2 == 0) {
      continue;
    }
  }
  sum += i;
}
document.writeln(`
    <p>N = ${N}</p>  
    <p>M = ${M}</p>
    <p>Skip even numbers - ${skipEven}</p>
    <p>${sum}</p>  
`);



function randomColor(){
  let r = Math.floor(Math.random() * (256));
  let g = Math.floor(Math.random() * (256));
  let b = Math.floor(Math.random() * (256));
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
const container = document.querySelector('.container');
function generateBlock(){
  const div = document.createElement('div');
  div.style.backgroundColor = randomColor();
  container.append(div);
}
function generateBlocks(){
  for (var i = 0; i < 25; i++) {
    generateBlock();
  }
}
function createColor(){
  document.querySelectorAll("div").forEach(div => div.style.backgroundColor = randomColor());
}
function generateBlocksInterval(){
  generateBlocks();
  setInterval(() => createColor(), 1000);
}
generateBlocksInterval();



  
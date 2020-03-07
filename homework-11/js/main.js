const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}
const getSymbol = () => {
  return new Promise((resolve) => {
      const sign = `${Date.now()}`.slice(-5);
      resolve(String.fromCharCode(sign));
  });
}

async function getRandomChinese(length, time){
  let str = [];
  while(str.length < length){
    str.push(await getSymbol());
    await delay(time);
  } 
  return console.log(str.join(""));   
} 
getRandomChinese(4, 50);

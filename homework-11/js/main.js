const getSymbol = () => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      const sign = `${Date.now()}`.slice(-5);
      resolve(String.fromCharCode(sign));
  }, 50);
  });
}
async function getRandomChinese(length){
  let str = [];
  while(str.length < length){
    str.push(await getSymbol());
  } 
  return console.log(str.join(""));   
} 
getRandomChinese(4).then();
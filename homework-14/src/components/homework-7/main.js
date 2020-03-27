function homework7(){
  const ukraine = {
  tax: 0.195, 
  middleSalary: 1789, 
  vacancies: 11476 
};
const latvia = {
  tax: 0.25, 
  middleSalary: 1586, 
  vacancies: 3921 
};
const litva = {
  tax: 0.15, 
  middleSalary: 1509, 
  vacancies: 1114 
};
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// 1
function getMyTaxes(salery){
    return salery * this.tax;
}

// 2
function getMiddleTaxes(){
  return this.middleSalary * this.tax;
}

// 3
function getTotalTaxes(){
  return this.middleSalary * this.tax * this.vacancies;
}

// 4
function getMySalary(){
  let result = {};
  setInterval(() => {
  result.salary = randomInteger(1500, 2000);
  result.taxes = result.salary * this.tax;
  result.profit = result.salary - result.taxes;
  return  console.log(result);
  }, 10000);
}
console.log(getMyTaxes.call(ukraine, 1500));
console.log(getMiddleTaxes.call(ukraine));
console.log(getTotalTaxes.call(ukraine));
getMySalary.call(ukraine);
}
export default homework7;


                  
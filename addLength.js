const addLength = (str) => {
  return str.split(" ").map((verb) => `${verb} ${verb.length}`);
  // So first We Need We Need Split of each verb that divided space by using split method
  //   then return into new Array by using map method to add index value at the end of each new array index
};
console.log(addLength("nama saya"));

const oddEvenCar = (str) => {
  const checkNumber = +str.replace(/[^.\d]/g, "").slice(0, 1);
  // if (checkNumber % 2 === 0) {
  //   return `${checkNumber} => Genap`;
  // } else {
  //   return `${checkNumber} => Ganjil`;
  // }
  const result = checkNumber % 2 === 0 ? `\n${checkNumber} => Genap` : `\n${checkNumber} => Ganjil`;
  return result;
};
const oddEvenCar1 = (str) => {
  const checkNumber = +str.filter((value) => typeof value == 9);
  console.log(checkNumber);

  const result = checkNumber % 2 === 0 ? `\n${checkNumber} => Genap` : `\n${checkNumber} => Ganjil`;
  return result;
};

let data = ["B 5421 AF", "B 6212 ESJ"];
console.log(oddEvenCar1(["B 5421 AF", "B 6212 ESJ"]));
let arr = ["83", "helloworld", "0", "", false, 2131, 3.3, "3.3", 0];
const onlyNumbers = arr.filter((value) => isFinite(value));
console.log(onlyNumbers);

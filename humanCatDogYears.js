const calcTriSpec = (humanYears) => {
  const cat = (humanYears >= 2 ? 16 : 11) + 4 * humanYears;
  const dog = (humanYears >= 2 ? 14 : 10) + 5 * humanYears;
  return [humanYears, cat, dog];
};
// ? its a bit tricky because instruction from web its a bit misleading information
// ! from web instruction first year for cat and dog its same firstyear =15, secondyear =9 but actually its different dog first year=14, second year= 10, for cat its 16 and 11
console.log(calcTriSpec(1));

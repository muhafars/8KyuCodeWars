const barTriang = ([x1, y1], [x2, y2], [x3, y3]) => {
  return [+((x1 + x2 + x3) / 3).toFixed(4), +((y1 + y2 + y3) / 3).toFixed(4)];
};
const barTriang2 = ([x1, y1], [x2, y2], [x3, y3]) => {
  let x = (x1 + x2 + x3) / 3;
  let y = (y1 + y2 + y3) / 3;
  return [+x.toFixed(4), +y.toFixed(4)];
};

const barTriang3 = ([x1, y1], [x2, y2], [x3, y3]) => {
  let div = 3,
    x = (x1 + x2 + x3) / div,
    y = (y1 + y2 + y3) / div;
  return [x, y].map((res) => +res.toFixed(4));
};
// ? We need x, y as an array based on input we need 3 each of x,y
// ? Its like big O n+n/1 = n+n+n/3 and we need applying this notation to x and y
// ? Why is 3? Cause its triangle
// ? We add unary operator (+) for converting strings to integers so meet the requirements
console.log("v1 : ", barTriang([4, 6], [12, 4], [10, 10]));
console.log("v1 : ", barTriang([4, 2], [12, 2], [6, 10]));
console.log("v2 : ", barTriang2([4, 6], [12, 4], [10, 10]), barTriang2([4, 2], [12, 2], [6, 10]));
console.log("v3 : ", barTriang3([4, 6], [12, 4], [10, 10]));
console.log("v3 : ", barTriang3([4, 2], [12, 2], [6, 10]));

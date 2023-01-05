/**
*?    DESCRIPTION:
** The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:
*?    [This is writen in pseudocode]
   if(number is even) number = number / 2
   if(number is odd) number = 3*number + 1
*?    Task
   Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1
*? Examples
** hotpo(1) returns 0
(1 is already 1)

**hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

** hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

** hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

*? Reference
** Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture
 */

const hotpo = (n, accumulator = 0) => (n <= 1 ? accumulator : hotpo(n % 2 === 0 ? n / 2 : 3 * n + 1, accumulator + 1));
// ? We add New Param Accumulator for initialize as Condition start from 0
// ! 3n+1 | 3.n+1 => 2n+1 Big O
// ? First We add 2 parameters n as n, and accumulator as (1 && condition acumulation)
// ? Second we add logic for condition n <= 1 then accumulator is 0 there is no need to multiplying n
// ? Third we add logic for condition odd and even
// ? Fourth we set condition for odd and even, if even then n/2 else if odd then we multiply n by and then add 1
// ? Fifth we add accumulator + 1 as condition odd and even
console.log(hotpo(1, 0));
console.log(hotpo(1, 1));
console.log(hotpo(1, 2));
console.log(hotpo(1, 3));
console.log(hotpo(2, 0));
console.log(hotpo(2, 1));
console.log(hotpo(2, 2));
console.log(hotpo(2, 3));
console.log(hotpo(3, 0));
console.log(hotpo(3, 1));
console.log(hotpo(3, 2));
console.log(hotpo(3, 3));
console.log(hotpo(6, 0));
/*
const Test = require("@codewars/test-compat");
describe("Test", function () {
  it("Examples", function () {
    Test.assertEquals(hotpo(1), 0);
    Test.assertEquals(hotpo(5), 5);
    Test.assertEquals(hotpo(6), 8);
    Test.assertEquals(hotpo(23), 15);
  });
});
*/

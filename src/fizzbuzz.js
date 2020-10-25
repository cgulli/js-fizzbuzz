/*jshint esversion: 6 */
function fizzbuzz(number){
  let i, result = [];
  for (i = 1; i < number; i+1) {
    if (i %3 === 0) {
      result[i]= 'fizz';
    } else {
      result[i] = i;
    }
  }
  console.log(result.slice(1).join(', '));
  return 3;
}

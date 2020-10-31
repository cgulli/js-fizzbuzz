/*jshint esversion: 6 */
function fizzbuzz(number){
  const result = [];
  let i;
  for (i = 1; i < number; i++) {
    if (i % 3 === 0) {
      result[i] = 'fizz'
    } else {
      result[i] = i
    }
  }
  return result.slice(1).join(', ');
}

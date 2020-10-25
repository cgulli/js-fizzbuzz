/*jshint esversion: 6 */
describe('FizzBuzz Tests', function(){
  it('should return fizz', function(){
    const result = '1, 2, fizz';
    expect(fizzbuzz(3)).toEqual(result);
  });
});

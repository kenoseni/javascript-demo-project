exports.fizzBuzz = function (N){

if(N % 3 === 0 & N % 5 ===0){
  return 'FizzBuzz'
  }
if(N % 3 === 0){
  return 'Fizz'
}
if(N % 5 === 0){
  return 'Buzz'
}else{
  return N
}
}

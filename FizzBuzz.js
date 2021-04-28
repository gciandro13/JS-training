var fizz = "Fizz";
var bazz = "Bazz";
var fizzBuzz = fizz + bazz;

for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(fizzBuzz);
  } else if (num % 3 === 0) {
    console.log(fizz);
  } else if (num % 5 === 0) { 
   console.log(bazz);
  } else { 
   console.log(num);
  }
}
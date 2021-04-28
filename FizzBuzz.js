function fizzBuzz(fizz, buzz) {
  console.log(fizz + buzz)
};

function fizz(fizz) {
  console.log(fizz)
};

function buzz(buzz) {
  console.log(buzz)
};

function doDefaultJob(num) {
  console.log(num)
}

function doJob(Fizz, Buzz) {
  var fizzvar = Fizz;
  var buzzvar = Buzz;
  for (var num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      fizzBuzz(fizzvar, buzzvar);
    } else if (num % 5 === 0) {
      fizz(fizzvar);
    } else if (num % 3 === 0) {
      buzz(buzzvar);
    } else {
      doDefaultJob(num);
    }
  }
}

var Fizz = "Fizz";
var Buzz = "Buzz";
doJob(Fizz, Buzz);




// old function
function AndreJob() {
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
}
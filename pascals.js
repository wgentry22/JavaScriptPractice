//This Program gives takes a single parameter and returns the Pascal's Triangle for the parameter
//Try out each commented out example in order

//This definition of the factorial works
function fac(n){
  var array = [];
  if (n === 0){
    return 1;
  } else {
    for (var i = 1; i <= n; i++){
      array.push(i);
    }
    var fact = array.reduce(function(a, b){
      return a*b;
    }, 1);
  }
  return fact;
}

//console.log(fac(9));

//refactored for all cases
function combination(n, k){
  if (n < k){
    return "n must be greater than k";
  } else {
  return fac(n) / (fac(k) * fac(n-k));
  }
}

//not necessary to this program, created to see if it worked
function permutation(n, k){
  if (n < k){
    return "n must be greater than k";
  } else {
    return ((fac(n)) / fac(n-k));
  }
}


//console.log(combination(6, 3));

//This function returns an array for the row of Pascal Triangle
function pascal(upperBound){
  pascalArray = [];
  for (i = 0; i <= upperBound; i++)
    pascalArray.push(combination(upperBound, i));

  return pascalArray;
}

//console.log(pascal(4));

//This returns the Pascal Triangle up to the upperBound parameter
function pascalsTriangle(upperBound){
  var triangle = [];
  for (var i = 0; i <= upperBound; i++){
    triangle.push(pascal(i));
  }
  return console.log(triangle);
}


//try this
pascalsTriangle(5);

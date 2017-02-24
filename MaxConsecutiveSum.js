var maxConSum = function(input){
  var localMax = input[0];
  var ultimateMax = input[0];

  for(var i=1;i<input.length;i++){
    localMax = Math.max(localMax+input[i],input[i]);
    ultimateMax = Math.max(localMax,ultimateMax);
  }
  return ultimateMax;
};

console.log(maxConSum([6,-1,3,5,-10]));

var InsertSort = function(input){
  for(var i=0;i<input.length;i++){
    var temp = input[i];
    var ptr = i;
    while(ptr>0 && temp<input[ptr-1]){
      input[ptr] = input[ptr-1];
      ptr--;
    }
    input[ptr] = temp;
  }
  return input;
};

var ans = InsertSort([4,8,1,5,3]);
console.log(ans+" InsertionSort");

var SelectSort = function(input){
  for (var i = 0; i < input.length; i++){
      var min = input[i];
      var mId = i;
      for(var j=i+1;j<input.length;j++){
          if(input[j]<min){
            min = input[j];
            mId = j;
          }
      }
      input[mId] = input[i];
      input[i] = min;
  }
  return input;
} ;

var ans = SelectSort([4,8,1,5,3]);
console.log(ans+" SelectionSort");

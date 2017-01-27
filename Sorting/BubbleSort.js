var BubSort = function(input){
  var temp;
  var swap;
  var endId = input.length;
  while(endId>0){
    swap=false;
    for(var i=0;i<endId;i++){
      if(input[i]>input[i+1]){
        temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
        swap=true;
      }
    }
    endId--;
    if(!swap){break;}
  }
  return input;
};

var ans = BubSort([4,8,1,5,3]);
//var ans = BubSort([1,2,3,4,5]);
console.log(ans+" BubbleSort");

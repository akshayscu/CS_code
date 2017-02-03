var quickSort = function(arr){
  if(arr.length<=1){
    return arr;
  }

  var pId = Math.floor(arr.length/2);
  var pivot = arr[pId];

  var left = [];
  var right = [];

  for(var i=0;i<arr.length;i++){
    if(i!==pId){
      if(arr[i]<=pivot){
        left.push(arr[i]);
      }
      else{
        right.push(arr[i]);
      }
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}


var ans = quickSort([9,7,5,1,3]);
console.log(ans);

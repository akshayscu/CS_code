var joinArrays = function(arr1,arr2){
  var p1=0;
  var p2=0;
  var res = [];

  if(arr1===undefined){
    return arr2;
  }
  else if (arr2===undefined){
    return arr1;
  }

  while(arr1[p1]!==undefined && arr2[p2]!==undefined){
    if(arr1[p1]<=arr2[p2]){
      res.push(arr1[p1]);
      p1++;
    }
    else{
      res.push(arr2[p2]);
      p2++;
    }
  }

  if(p1===arr1.length){
    res = res.concat(arr2.slice(p2));
  }
  else if (p2===arr2.length){
    res = res.concat(arr1.slice(p1));
  }
  return res;
};

var mergeSort = function(input){
  if(input.length<=1){
    return input;
  }
  var midId = Math.floor(input.length/2);
  var left = input.slice(0,midId);
  var right = input.slice(midId,input.length);
  return joinArrays(mergeSort(left),mergeSort(right));
};

var ans = mergeSort([9,7,5,3,1]);
console.log(ans);

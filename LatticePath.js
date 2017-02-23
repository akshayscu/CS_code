//Recursion-Helper Method Style
var LatticePath1 = function(n){
  var count = 0;
  var traverse = function(x,y){
    if(x===n && y==n){
      count++;
      return;
    }
    else if(x>n || y>n){
      return;
    }
    traverse(x+1,y);
    traverse(x,y+1);
  };
  traverse(0,0);
  return count;
};

//Recursion-with Side-Effects
var LatticePath2 = function(n,x,y){
  if(x===undefined || y===undefined){
    x = 0;
    y = 0;
  }
  if(x===n && y===n){
    return 1;
  }
  else if (x>n || y>n){
    return 0;
  }
  return LatticePath2(n,x+1,y) + LatticePath2(n,x,y+1);
};

//Pure Recursion-Helper
var LatticePath3 = function(x,y){
  if(x===0 && y===0){
    return 1;
  }
  else if (x<0 || y<0){
    return 0;
  }
  return LatticePath3(x-1,y) + LatticePath3(x,y-1);
};

console.log("Recursion-Helper Method Style-->"+LatticePath1(3));
console.log("Recursion-with Side-Effects-->"+LatticePath2(3));
console.log("Pure Recursion-->"+LatticePath3(3,3));

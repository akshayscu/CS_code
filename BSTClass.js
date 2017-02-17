var node = function(val){
  this.value = val;
  this.lChild = null;
  this.rChild = null;
};
var BinarySearchTree = function(){
  this.root = null;
  this.size = 0;
};

BinarySearchTree.prototype.insert = function (val) {
  if(this.root === null){
    this.root = new node(val);
    this.size++;
  }
  else{
    var findAndIns = function(currNode){
      if(val > currNode.value){
        if(currNode.rChild === null){
          currNode.rChild = new node(val);
        }
        else{
          findAndIns(currNode.rChild);
        }
      }
      else if(val < currNode.value){
        if(currNode.lChild === null){
          currNode.lChild = new node(val);
        }
        else{
          findAndIns(currNode.lChild);
        }
      }
    };
    findAndIns(this.root);
    this.size++;
  }
};

BinarySearchTree.prototype.search = function(target){
  var check = false;
  var traverse = function(currNode){
    if(currNode===null){
      return;
    }
    else if(currNode.value===target){
      check = true;
      return;
    }

  if(target<currNode.value){
    traverse(currNode.lChild);
  }
  else{
    traverse(currNode.rChild);
  }
};
  traverse(this.root);
  return check;
};

BinarySearchTree.prototype.delete = function (delVal){
  var temp = [];
  var trvse = function(currNode){
    if(currNode===null){
      return;
    }
    if(currNode.value!==delVal){
      temp.push(currNode.value);
    }
    trvse(currNode.lChild);
    trvse(currNode.rChild);
  };
  trvse(this.root);
  if(this.size===temp.length){
    console.log("No element to delete!");
    return;
  }
  this.root = null;
  this.size = 0;
  for(var i=0;i<temp.length;i++){
    this.insert(temp[i]);
  }
  console.log("Value Deleted!");
  return;
};

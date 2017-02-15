var Node = function(value){
  this.value = value;
  this.next = null;
};

var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.len = 0;
};

LinkedList.prototype.append = function (val) {
  if(this.len===0){
    this.head = new Node(val);
    this.tail = this.head;
  }
  else{
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
  }
  this.len++;
};

LinkedList.prototype.insert = function(srch,insr){
  var work = this.head;
  while(work!==null){
    if(work.value===srch){
      var ref = work.next;
      work.next = new Node(insr);
      work.next.next = ref;
      if(ref===null){
        this.tail = work.next;
      }
      this.len++;
      return;
    }
    work = work.next;
  }
  console.log("Error");
};

LinkedList.prototype.delete = function(loc){
  if(this.len===1 && loc===0){
    this.head = null;
    this.tail = null;
    this.len--;
    console.log("Case1");
    return;
  }
  else{
    this.head = this.head.next;
    this.len--;
    return;
  }
  var work = this.head;
  counter = 0;
  while(work!==null){
    if(counter===loc-1 && work.next!==null && work.next===this.tail){
      work.next = work.next.next;
      this.tail = work;
      this.len--;
      return;
    }
    else if(counter===loc-1 && work.next!==null){
      work.next = work.next.next;
      this.len--;
      return;
    }
    counter++;
    work = work.next;
  }
  console.log("Error");
};

LinkedList.prototype.contains = function(srch){
  var ref = this.head;
  while(ref!==null){
    if(ref.value === srch){
      return true;
    }
    ref = ref.next;
  }
  return false;
};
var newLL = new LinkedList();
newLL.append("Hi");
newLL.append("Hie");
newLL.append("Hiee");
console.log(newLL);
console.log(JSON.stringify(newLL));
// var isThere = newLL.contains("Hieee");
// console.log(isThere);
// newLL.delete(0);
// console.log(newLL);

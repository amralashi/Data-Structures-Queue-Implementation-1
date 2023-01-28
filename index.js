//A simple node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Queue data structure class
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //Gets the first in queue
  peek() {
    console.log(this.first);
  }

  //Add elements to the queue
  enqueue(value){
    const newNode = new Node(value);

    if(this.length === 0){

      this.first = newNode;
      this.last = newNode;
    } else{
    
      this.last.next = newNode;
      this.last = newNode; 
    }
    this.length++;
    console.log(this);
  }

  //Remove elements from the queue
  dequeue(){

    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;

    if(this.length === 0){
      this.last = this.first;
    }

    console.log(this);
  }

  //Check if the queue is empty
  isEmpty(){
    console.log(this.length === 0);
  }
}


//Calling code starts from here...
const myQueue = new Queue();

myQueue.enqueue('Joe');
myQueue.peek();
myQueue.enqueue('Ali');
myQueue.isEmpty();

myQueue.dequeue();
myQueue.dequeue();
myQueue.isEmpty();

myQueue.enqueue('Amr');
myQueue.enqueue('Bob');
myQueue.enqueue('Zohra');
myQueue.enqueue('Mohamed');
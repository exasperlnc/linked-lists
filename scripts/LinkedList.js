import Node from '../scripts/Node'

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  push(data) {
    this.length ++;

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = new Node(data); 
    }
  }

  pop() {
    let currNode = this.head;
    let prevNode = this.head; 
    if (!this.head){
      return null;
    } else if (!this.head.next) {
      this.head = null;
      this.length = 0;
    }else {
      while (currNode.next) {
        prevNode = currNode
        currNode = currNode.next;
      }
      this.length --;
      prevNode.next = null;
    }
    return currNode;
  }

  find(data) {
    let foundNode = null;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
        break;
      } else {
        currNode = currNode.next;
      }
    }

    return foundNode;
  }

  delete(data) {
    let prevNode = this.head;
    let currNode = this.head;

    while(currNode){
      if (currNode.data === data && currNode === this.head) {
        this.head = currNode.next;
      } else if (currNode.data === data) {
        prevNode.next = currNode.next;
        this.length --;
        break;
      } else {
        prevNode = currNode
        currNode = currNode.next
      }
    }
  }

  toArray() {
    let currNode = this.head
    const returnArray = []
    if (this.head == null) {
      return returnArray;
    } else {
      do {
       // put currNode.data into returnArray
      returnArray.push(currNode.data);
       // move currNode pointer to currNode.next 
       currNode = currNode.next
      } while (currNode != null )
    }
    return returnArray;
  }

  include(data) {
    if (this.find(data)) {
      return true;
    } else {
      return false;
    }
  }

  index(data) {
    let foundNode = null;
    let currNode = this.head;
    let counter = 0

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
        return counter;
      } else {
        currNode = currNode.next;
        counter ++
      }
    }

    return null;
  }

  insert(index, data) {
    let newNode = new Node(data)
    let currNode = this.head
    let prevNode = this.head
    let counter = 0
    while (counter < index && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
      counter++;
    }
    this.length ++;
    newNode.next = currNode;
    prevNode.next = newNode;
  }
}
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
}
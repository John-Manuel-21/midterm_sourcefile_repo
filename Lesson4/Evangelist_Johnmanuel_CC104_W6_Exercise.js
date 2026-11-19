'use strict';
console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// PART A
class Stack {
  constructor() {
    this.items = [];
  }
   push(element) {
    this.items.push(element);
       // It adds a new action at the end of the array
  }
  pop() {
    return this.items.pop();
    // It removes and returns the last item, so Closed Ticket #101 comes off, leaving this  [Opened ticket, Assigned ticket].
  }
  peek() {
    return this.items[this.items.length - 1];
      // it looks at items[items.length - 1] without touching the array. This shows the ' Closed Ticket #101'
  }
  isEmpty() {
    return this.items.length === 0
// It checks if array has 0 items. If yes,it return to true (empty). Otherwise false
  } 
  size() {
    return this.items.length;
      //tells how many items are in the array .
  }
  toString() {
    return this.items.join(', ');
      // turn the whole stack into readable String and items separated by commas
  }
}
console.log('\nPART A: UNDO HISTORY');
const actionHistory = new Stack();
// create new empty stack

actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');
// it calls and add one by one and print

console.log('Top Action: ' + actionHistory.peek());
//looks at the top item without removing it 

console.log('Undo Action: ' + actionHistory.pop());
// remove closed ticket and return it. the remaining are opening and assigned

console.log('Remaining Actions: ' + actionHistory.toString());
// print the remaining Stack

console.log('Stack Size: ' + actionHistory.size());
// counts the remaining Stack

// PART B
class Queue {
  constructor() {
    this.items = [];
  }
enqueue(element) {
    this.items.push(element);
    // It adds a new item in the end of array
  }
  dequeue() {
    return this.items.shift();
      // it removes a item from the front of array
  }
  front() {
    return this.items[0];
      //Just looks at the first item in line, without removing it.
  }
  isEmpty() {
    return this.items.length === 0;
      // checks if array are empty. then true if there's nothing in it
  }
  size() {
    return this.items.length;
      // tells how many items are
  }
  toString() {
    return this.items.join(', ');
      //Turns the whole queue into one readable string and the items separated by commas.
  }
}
console.log('\nPART B: WAITING REQUESTS');
const waitingRequests = new Queue(); // create new empty queue

waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');
// It calls and add tickets one by one and print it

console.log('Next Request: ' + waitingRequests.front());
// looks at index 0 without removing it
console.log('Processed: ' + waitingRequests.dequeue());
console.log('Processed: ' + waitingRequests.dequeue());
// it removes 201 from the front and returns it

console.log('Remaining Requests: ' + waitingRequests.toString());
// Prints the tickets still left in queue 203 and 204,then joined together with commas
console.log('Queue Size: ' + waitingRequests.size());
// print how many ticket are left

// PART C

class PriorityQueue {
  constructor() {
    this.items = [];
      // start with empty list 
  }
  enqueue(request, priority) {
      // combine the request and its priority into one object
    const queueItem = { request: request, priority: priority };
// look for first item that is less urgent than the new one
    let added = false;
    for (let i = 0; i < this.items.length; i++) { 
      if (queueItem.priority < this.items[i].priority) {
 // found a less urgent item, so it insert right before it
        this.items.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
      // if no less urgent item was found, add it to the end
    if (!added) {
      this.items.push(queueItem);
    }
  }
  dequeue() {
    return this.items.shift();
      // remove and return the item at the front (most urgent)
  }
  size() {
    return this.items.length;
      
  }
  print() {
    for (let i = 0; i < this.items.length; i++) {  
      console.log(this.items[i].request + ', Priority ' + this.items[i].priority);
    }
  }
}
// print every item with its priority

console.log('\nPART C: URGENT REQUESTS');
const urgentRequests = new PriorityQueue(); // new empty PriorityQueue

urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1); 
// this add the four requests, in the order given each one automatically slides into the correct spot by priority

console.log('Initial Priority Order:');
urgentRequests.print();

const processedUrgent = urgentRequests.dequeue();
//create new empty priority queue

console.log('Processed Priority Request: ' + processedUrgent.request + ', Priority ' + processedUrgent.priority); 
// print the request and priority of the ticket 
console.log('Remaining Priority Requests:');
urgentRequests.print();





const readline = require("readline-sync");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackUsingLL {
  constructor() {
    this.head = null;
  }

  push(data) {
    let newnode = new Node(data);
    newnode.next = this.head;
    this.head = newnode;
    console.log("Element added ! \n");
  }

  pop() {
    if (this.head == null) {
      console.log("Stack is Empty !\n");
    } else {
      console.log("Element removed : " + this.head.data + "\n");
      this.head = this.head.next;
    }
  }

  peek() {
    if (this.head == null) {
      console.log("Stack is Empty !\n");
    } else console.log("Peek element : " + this.head.data + "\n");
  }

  display() {
    if (this.head == null) {
      console.log("Stack is Empty !\n");
    } else {
      let temp = this.head;
      console.log("The elements of Stack are : ");

      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }

      console.log("\n");
    }
  }
}

let obj = new StackUsingLL();

console.log("Enter the task You need to perform ! ");

let choice = 0;

do {
  console.log("1.push\n2.pop\n3.peek\n4.display\n5.exit");

  choice = readline.question("Enter your choice :");

  switch (choice) {
    case "1":
      data = readline.question("Enter the data to add :");
      obj.push(data);
      break;

    case "2":
      obj.pop();
      break;

    case "3":
      obj.peek();
      break;

    case "4":
      obj.display();
      break;
  }
} while (choice != "5");

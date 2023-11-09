const readline=require('readline-sync');

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

   append(data){
    let newnode=new Node(data);
    if(this.head==null){
       this.head=newnode;
    }
    else{
        let temp=this.head;
        while(temp.next!=null){
          temp=temp.next;
        }
        temp.next=newnode;
    }
   }

   display(){
    console.log("The elements are : ");
    let temp=this.head;
    while(temp!=null){
       console.log(temp.data);
       temp=temp.next;
    }
   }


}

let l=new LinkedList();

while(true){
  let data=readline.question("enter the data : ");
  if(data<0){
     console.log("Invalid data !");
     break;
  }
  else{
     l.append(data);
  }
}
l.display();
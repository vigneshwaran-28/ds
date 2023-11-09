const readline=require("readline-sync");

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{

    constructor(){
        this.head=null;
    }

    insertAtTail(data){
      
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
            newnode.prev=temp;

        }

    }

    insertAtFront(data){
      
        let newnode=new Node(data);
       
        if(this.head==null){
            this.head=newnode;
        }
       
        else{
            newnode.next=this.head;
            this.head.prev=newnode;
            this.head=newnode;
    
        }
    }



    display(){
        
        let temp=this.head;

        console.log("Elements of list are :");

        while(temp!=null){

            console.log(temp.data);
            temp=temp.next;

        }

    }

}

let obj=new DoublyLinkedList();
let data=0;
while(true){
  data=readline.question("Enter the data : ");
  if(data<0){
    console.log("Invalid data ! ");
    break;
  }
//   obj.insertAtTail(data);
     obj.insertAtFront(data);
}

obj.display();
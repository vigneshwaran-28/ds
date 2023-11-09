let readline=require("readline-sync");

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class CircularLL{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    insert(data){
        let newnode=new Node(data);
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
            newnode.next=newnode;
        }
        else{
            this.tail.next=newnode;
            this.tail=newnode;
            this.tail.next=this.head;
        }
    }

    display(){
        let temp=this.head;
        console.log("Elements of LinkedList : ");
        do{
            console.log(temp.data);
            temp=temp.next;
        }while(temp!=this.head);
    }

}

let obj=new CircularLL(),data=0;

while(true){
   data=readline.question("Enter the data to add : ");
   if(data<0){
    console.log("Invalid data !");
    break;
   }
   obj.insert(data);
}

obj.display();


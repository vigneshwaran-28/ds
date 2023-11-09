const readline=require("readline-sync");

class Node{
   constructor(data){
    this.data=data;
    this.node=null;
   }
}

class LinkedList{
   constructor(){
     this.head=null;
   }
   
   insert(data){
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
    let temp=this.head;
    console.log("the elements are");
    while(temp!=null){
       console.log(temp.data);
       temp=temp.next;
      }
   }

   insertAtPos(data,pos){
    let newnode=new Node(data);
     if(pos==1){
        newnode.next=this.head;
        this.head=newnode;
     }
     else{
        let i=1,temp=this.head;
        while(i++<pos-1){
         temp=temp.next;
        }
        if(temp==null)
          console.log("Invalid position !");
          newnode.next=temp.next;
          temp.next=newnode;
     }
   }


}

let obj=new LinkedList();


let data;
while(true){
   data=readline.question("Enter the data : ");
   if(data<0){
    console.log("Invalid data ! ");
    break;
   }
   else{
     obj.insert(data);
   }
}
obj.display();


let pos=readline.question("Enter the position to insert : ");
let dataAtPos=readline.question("Enter the data to insert : ");



obj.insertAtPos(dataAtPos,pos);

obj.display();




let readline=require("readline-sync");

class Node{
    
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }

}


class DoubleCircularLL{
    
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
            newnode.prev=newnode;
        }
        
        else{
            this.tail.next=newnode;
            newnode.prev=this.tail;
            this.tail=newnode;
            this.tail.next=this.head;
            this.head.prev=this.tail;
        }

    }

    display(){
       
        // let temp=this.tail;
        // console.log("Elements of LinkedList : ");
        // do{
        //     console.log(temp.data);
        //     temp=temp.prev;
        // }while(temp!=this.tail);
    


        if(this.head==null){
            console.log("List is Empty !");
            return;
        }

        let temp=this.head;
        console.log("Elements of LinkedList : ");
        
        do{
            console.log(temp.data);
            temp=temp.next;
        }while(temp!=this.head);


    }

   
    insertAtPos(pos,data){
        
        let newnode=new Node(data);
        
        if(pos==1){
            newnode.next=this.head;
            this.head=newnode;
            newnode.prev=this.tail;
            let temp=newnode.next;
            temp.prev=newnode;
        }
       
        else{
          
            let i=1;
            let temp=this.head;
            
            while(i++<pos-1){
                temp=temp.next;
            }

            newnode.next=temp.next;
            temp.next=newnode;
            newnode.prev=temp;
            temp=temp.next.next;
            temp.prev=newnode;
       
        }
    }

    
    deleteAtPos(pos){
       
        if(pos==1){
            this.head=this.head.next;
            this.tail.next=this.head;
            this.head.prev=this.tail;
        }

        else{
            let i=1,temp=this.head;

            while(i++<pos-1){
                temp=temp.next;
            }

            temp.next=temp.next.next;
            let prevTemp=temp;
            temp=temp.next;
            temp.prev=prevTemp;
       
        }

    }

    insertAtFront(data){
       
        let newnode=new Node(data);

        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
            newnode.next=newnode;
            newnode.prev=newnode;
        }

       else{
            newnode.next=this.head;
            this.head=newnode;
            newnode.prev=this.tail;
            let temp=newnode.next;
            temp.prev=newnode;
            this.tail.next=this.head;
        }
       
    }

    deleteAtEnd(){


        if(this.head==null){
            console.log("List is Empty !");
            return;
        }
        
        let temp=this.tail;
        temp=temp.prev;
        this.tail=temp;
        this.tail.next=this.head;
    
    }



}

let obj=new DoubleCircularLL();


console.log("Enter the task You need to perform ! ");

let choice=0;

do{
  
  console.log("\n1.Insert\n2.Insert At Position\n3.Delete At Position\n4.Insert At the Beginning\n5.Delete At the End\n6.Display\n7.Exit");
  
  choice=readline.question("Enter your choice :");

  switch(choice){
    
    case "1":
        data=readline.question("Enter the data to add :");
        obj.insert(data);
        break;
    
    case "2":
        pos=parseInt(readline.question("Enter the position to insert : "));
        data=parseInt(readline.question("Enter the data to insert : "));
        obj.insertAtPos(pos,data);
        break;
    
    case "3":
        pos=parseInt(readline.question("Enter the position to delete : "));
        obj.deleteAtPos(pos);
        break;
    
    case "4":
        data=parseInt(readline.question("Enter the data to insert : "));
        obj.insertAtFront(data);
        break;
    
    case "5":
        obj.deleteAtEnd();
        break;

    case "6":
        obj.display();
        break;
        
  }

}while(choice!="7")


const readline=require("readline-sync");

class Node{
   
    constructor(data){
        this.data=data;
        this.next=null;
   }

}

class QueueUsingLL{
    
    constructor(){
        this.head=null;
        this.rear=null;
    }


    insert(data){

        let newnode=new Node(data);

        if(this.head==null){
            this.head=this.rear=newnode;
        }

        else{
            this.rear.next=newnode;
            this.rear=newnode;
        }

        console.log("Element added ! \n");

    }


    delete(){

        if(this.head==null){
            console.log("Queue is Empty !\n");
        }

        else{
            console.log("Element removed : "+this.head.data+"\n");
            this.head=this.head.next;
        }

    }



    peek(){
        
        if(this.head==null){
            console.log("Queue is Empty !\n");
        }
        
        else
            console.log("Peek element : "+this.head.data+"\n");
    
    }


    display(){
        
        if(this.head==null){
            console.log("Queue is Empty !\n");
        }

        else{
            let temp=this.head;
            console.log("The elements of Queue are : ");
        
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next;
            }
        
            console.log("\n");
        
        }

    }   
}


let obj=new QueueUsingLL();

console.log("Enter the task You need to perform ! ");

let choice=0;

do{
  
  console.log("1.push\n2.pop\n3.peek\n4.display\n5.exit");
  
  choice=readline.question("Enter your choice :");

  switch(choice){
    
    case "1":
        data=readline.question("Enter the data to add :");
        obj.insert(data);
        break;
    
    case "2":
        obj.delete();
        break;
    
    case "3":
        obj.peek();
        break;
    
    case "4":
        obj.display();
        break;
        
  }

}while(choice!="5")
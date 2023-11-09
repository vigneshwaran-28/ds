const readline=require('readline-sync');

let count=0;

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head1=null;
        this.head2=null;
    }

   insertHead1(data){
    let newnode=new Node(data);
    if(this.head1==null){
       this.head1=newnode;
    }
    else{
        let temp=this.head1;
        while(temp.next!=null){
          temp=temp.next;
        }
        temp.next=newnode;
    }
   }


   insertHead2(data){
    let newnode=new Node(data);
    if(this.head2==null){
       this.head2=newnode;
    }
    else{
        let temp=this.head2;
        while(temp.next!=null){
          temp=temp.next;
        }
        temp.next=newnode;
    }
   }

   display(){
    console.log("The elements are : ");
    let temp=this.head1;
    while(temp!=null){
       console.log(temp.data);
       temp=temp.next;
    }
   }


    getInput(){

        while(true){
            let data=readline.question("enter the data : ");
        
            if(data<0){
                console.log("Invalid data !");
                break;
            }
        
            else{
                (count)?this.insertHead2(data):this.insertHead1(data);
            }
        }
    }
    

    mergeList(pos){

        if(pos==1){
            let temp=this.head2;
            let temp1=this.head1;
                while(temp.next!=null){
                    temp=temp.next;
                }
                temp.next=temp1;
                temp=this.head2;
            console.log("The elements of LinkedList are : ");
            while(temp){
                console.log(temp.data);
                temp=temp.next;
            }
        }

        else{
            let temp=this.head1;
            let i=1;
            while(i<pos-1){
                temp=temp.next;
            }
            let prev=temp.next;
            temp.next=this.head2;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=prev;
            this.display();
        }



    }

   


}

let l=new LinkedList();

console.log("First LinkedList :")

l.getInput();

count++;

console.log("Second LinkedList :")

l.getInput();

let pos=readline.question("Enter the Position to insert the LinkedList :");

l.mergeList(pos);


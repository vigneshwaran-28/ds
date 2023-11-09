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
    console.log("The elements are : ");
    let temp=this.head;
    while(temp!=null){
       console.log(temp.data);
       temp=temp.next;
    }
   }

   removeDuplicatesSorted(){
    let temp=this.head;
    while(temp.next && temp){
        if(temp.data==temp.next.data){
            temp.next=temp.next.next;
            continue;
        }
        temp=temp.next;
    }
   }

//    removeDuplicatesNonSorted(){
//     let arr=[];
//     let temp=this.head;
//     while(temp!=null){
//        if(!arr.includes(temp.data)){
//             arr.push(temp.data);
//        }
//        temp=temp.next;
//     }
//     let res=new LinkedList();
//     res=null;

//     for(let i=arr.length-1;i>=0;i--){
//         let newnode=new Node(arr[i]);
//         if(!res){
//             res=newnode;
//         }
//         else{
//             newnode.next=res;
//             res=newnode;
//         }
//     }

//     temp=res;
//     console.log("After removing duplicates are : ");
//     while(temp!=null){
//         console.log(temp.data);
//         temp=temp.next;
//     }
    
//    }


removeDuplicatesNonSorted(){
    // console.log
    let temp=this.head;
    while(temp){
        let temp1=temp;
        // let prev=temp;
        while(temp1!=null&& temp1.next!=null){
            if(temp1!=temp && temp1.data==temp.data){
                // prev.next=temp1.next;
                if(temp1.next!=null)
                    temp1.data=temp1.next.data;
                else
                  temp1=null;
                temp1.next=temp1.next.next;
                continue;
           }
        //    prev=temp1;
           temp1=temp1.next;
        }
        if(temp.data==temp1.data)
          temp1=null;

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
     l.insert(data);
  }
}

// l.removeDuplicatesSorted();
// l.display();

l.removeDuplicatesNonSorted();

l.display();


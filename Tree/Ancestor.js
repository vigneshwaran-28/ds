const readline=require("readline-sync");

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Bst{

    constructor(){
        this.root=null;
    }

    insert(data){
        let newnode=new Node(data);
        if(this.root==null){
            this.root=newnode;
        }
        else{
            let temp=this.root;
            let parent;
            while(temp!=null){
                parent=temp;
                if(temp.data>data){
                    temp=temp.left;
                }
                else{
                    temp=temp.right;
                }
            }
            if(parent.data>data){
                parent.left=newnode;
            }
            else{
                parent.right=newnode;
            }
        }
    }


    commonAncestor(temp,data1,data2){
        if(temp.data<data1 && temp.data<data2){
            return this.commonAncestor(temp.right,data1,data2);
        }
        if(temp.data>data1 && temp.data>data2){
            return this.commonAncestor(temp.left,data1,data2);
        }
            return temp.data;
    }

  

}



let b=new Bst();
let data=0;
do{

    data=parseInt(readline.question("Enter the data : "));
    if(data>=0)
        b.insert(data);
    else
        console.log("Invalid data !");

}while(data>0);

let data1=parseInt(readline.question("Enter the first Node element :"));
let data2=parseInt(readline.question("Enter the second Node element :"));

console.log(b.commonAncestor(b.root,data1,data2));




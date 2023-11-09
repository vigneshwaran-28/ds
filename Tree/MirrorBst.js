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

    mirrorBst(temp){
        if(temp==null)
            return;
        this.mirrorBst(temp.left);
        this.mirrorBst(temp.right);
        let temp1=temp.left;
        temp.left=temp.right;
        temp.right=temp1;
    }

    inOrder(temp){
        if(temp==null)
            return;
        else{
            this.inOrder(temp.left);
            console.log(temp.data);
            this.inOrder(temp.right);
        }  
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

console.log("The elements before mirroring:");
b.inOrder(b.root);

b.mirrorBst(b.root);

console.log("The elements after concept of mirror:");
b.inOrder(b.root);



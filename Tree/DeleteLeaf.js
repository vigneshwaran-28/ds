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

    deleteRightLeaf(temp){
        if(temp.left==null && temp.right!=null){
            let a=temp.right;
            if(a.left==null && a.right==null)
              temp.right=null;
        }
        if(temp.left)
            this.deleteRightLeaf(temp.left);
        if(temp.right)
            this.deleteRightLeaf(temp.right);
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

// console.log("The elements are:");
// b.inOrder(b.root);

b.deleteRightLeaf(b.root);
console.log("The elements are:");
b.inOrder(b.root);



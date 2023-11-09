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

    printInorder(temp){
        if(temp==null)
            return;
        this.printInorder(temp.left);
        console.log(temp.data);
        this.printInorder(temp.right);
    }


    printPostorder(temp){
        if(temp==null)
            return;
        this.printInorder(temp.left);
        this.printInorder(temp.right);
        console.log(temp.data);
    }
     
     printPreorder(temp){
        if(temp==null)
            return;
        console.log(temp.data);
        this.printInorder(temp.left);
        this.printInorder(temp.right);
    }

}


let b=new Bst();
let data=0;
do{

    data=readline.question("Enter the data : ");
    if(data>=0)
        b.insert(data);
    else
        console.log("Invalid data !");

}while(data>0);

// console.log("Elements of tree in Inorder : ")

// b.printInorder(b.root);

console.log("Elements of tree in Postorder : ")

b.printPostorder(b.root);

// console.log("Elements of tree in Preorder : ")

// b.printPreorder(b.root);



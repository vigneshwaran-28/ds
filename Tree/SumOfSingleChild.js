const readline=require("readline-sync");

var sum=0;

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

    sumOfSingleChild(temp){
        if( (temp.left!=null && temp.right==null) || (temp.right!=null && temp.left==null) ){
            sum+=temp.data;
        }
        if(temp.left)
            this.sumOfSingleChild(temp.left,sum);
        if(temp.right)
            this.sumOfSingleChild(temp.right,sum);
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
b.sumOfSingleChild(b.root)
console.log(sum);



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


    heightOfBst(){
        let count=0;
          if(!this.root){
            return count;
          }
          else{
            let queue=[this.root];
            while(queue.length){
                let len=queue.length;
                for(let i=0;i<len;i++){
                    let node=queue.shift();
                    if(node.left)
                        queue.push(node.left);
                    if(node.right)
                        queue.push(node.right);
                }
             
                count++; 
            }
            
          }
          console.log(count);
        }

        print(temp){
            if(temp.left==null && temp.right==null)
                return temp.data;
            if(temp.left!=null)
                return this.print(temp.left);
            if(temp.right!=null)
                return this.print(temp.right);

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

// b.heightOfBst();

console.log(b.print(b.root));

//50,30,20,40,70,60,80




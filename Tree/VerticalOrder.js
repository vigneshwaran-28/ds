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

 printVertical(root){

    let res=[];

    getNum(root,0,0);
    // res.sort((a,b)=>a[0]-b[0] || b[1]-a[1]);
    res.sort((a,b)=>a[0]-b[0]);

    console.log("res",res);
    let map=new Map();

    for(let [x,y,val] of res){
        if(!map.has(x))
            map.set(x,[]);
        map.get(x).push(val);
    }
    console.log("map",map);
 

    function getNum(temp,x,y){
        if(temp==null)
            return;
        getNum(temp.left,x-1,y-1);
        res.push([x,y,temp.data]);
        getNum(temp.right,x+1,y-1);   
    }
    let temp=[...map.values()];

    return temp;

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

let res=b.printVertical(b.root);

console.log(res);







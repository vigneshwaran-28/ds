let readline=require("readline-sync");

class Graph{
    constructor(){
        this.map=new Map();
        this.tempArr=[];
    }

    addVertex(v){
        this.map.set(v,[]);
    }

    addEdge(source,destination){
        this.map.get(source).push(destination);
        this.map.get(destination).push(source);
    }

    dfs(data,tempArr){
        console.log(data);
        tempArr.push(data);
        let arr2=this.map.get(data);
        for(let num of arr2){
            if(!tempArr.includes(num))
                this.dfs(num,tempArr);
        }
    }
    

}

let g=new Graph();

let noOfVertices=readline.question("Enter the number of vertices : ");

for(let i=0;i<noOfVertices;i++)
   g.addVertex(readline.question("Enter the vertex nodes : "));

   console.log("Enter the Number of adjacent edges : ");

   let len=readline.question();
   
   for(let i=0;i<len;i++){
       console.log("Enter the two edges : ");
       g.addEdge(readline.question(),readline.question());
   }

console.log("The elements of Graph using Dfs are : ");

g.dfs("A",g.tempArr);


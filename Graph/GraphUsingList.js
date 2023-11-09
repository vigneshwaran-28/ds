let readline=require("readline-sync");

class Graph{
    constructor(){
        this.map=new Map();
    }

    addVertex(v){
        this.map.set(v,[]);
    }

    addEdge(source,destination){
        this.map.get(source).push(destination);
        this.map.get(destination).push(source);
    }

    

}

let g=new Graph();

let noOfVertices=readline.question("Enter the number of vertices : ");

for(let i=0;i<noOfVertices;i++)
   g.addVertex((readline.question("Enter the vertex nodes : ")));

console.log("Enter the Number of adjacent edges : ");

let len=readline.question();

for(let i=0;i<len;i++){
    console.log("Enter the two edges : ");
    g.addEdge(readline.question(),readline.question());
}

console.log(g.map);




let readline=require("readline-sync");

class Graph{
    constructor(){
        this.arr=[];
        this.resArr=[];
    }

    getCoOrdinates(source,destination){
       let x=this.arr.indexOf(source);
       let y=this.arr.indexOf(destination);
       this.getMatrixResult(x,y);
    }

    getMatrixResult(x,y){
        this.resArr[x][y]="1";
        this.resArr[y][x]="1";
    }

    

}

let g=new Graph();

let noOfVertices=readline.question("Enter the number of vertices : ");

for(let i=0;i<noOfVertices;i++){
    let tempArr=[];
    for(let j=0;j<noOfVertices;j++){
        tempArr.push(0);
    }
    g.resArr.push(tempArr);
}


for(let i=0;i<noOfVertices;i++)
   g.arr.push((readline.question("Enter the vertex nodes : ")));


   console.log("Enter the Number of adjacent edges : ");

   let len=readline.question();
   
   for(let i=0;i<len;i++){
       console.log("Enter the two edges : ");
       g.getCoOrdinates(readline.question(),readline.question());
   }
console.log(g.resArr);



const readline=require("readline-sync");

let noOfTransaction=readline.question("Enter the Number of Transactions : ");

let prices=[3,3,5,0,0,3,1,4];

let profit=0;
let res=[];
for(let i=1;i<prices.length;i++){
    if(prices[i]-prices[i-1]>0){
           profit+=prices[i]-prices[i-1];
           res.push(prices[i]-prices[i-1]);
           
    }
}
res.sort((a,b)=>{
    return a-b
});
let FinalPro=0,index=res.length-1;

for(let i=noOfTransaction;i>0;i--){
    FinalPro+=res[index--];
}

console.log(FinalPro);













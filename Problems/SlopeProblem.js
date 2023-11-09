let arr=[[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2]]

let res=[];

for(let i=1;i<arr.length;i++){
  let slope=(arr[i][1]-arr[i-1][1])/(arr[i][0]-arr[i-1][0]);
   res.push(slope);
}

let resNum=1;

for(let i=0;i<res.length-1;i++){
    if(res[i]!=res[i+1]){
        resNum++;
    }
}


console.log(resNum);
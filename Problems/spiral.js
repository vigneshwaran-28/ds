let arr=[[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]];

let right,lcolumn,left,lrow;

left=0;
right=0;
lcolumn=arr.length-1;
lrow=arr.length-1;

let res="";

while(left<=lrow){

    for(let i=left;i<lcolumn;i++){
        res+=arr[left][i]+' ';
    }

    for(let i=right;i<=lrow;i++){
        res+=arr[i][lcolumn]+' ';
    }

    for(let i=lcolumn-1;i>=left;i--){
        res+=arr[lrow][i]+' ';
    }


    for(let i=lrow-1;i>right;i--){
        res+=arr[i][right]+' ';
    }

    left++;
    right++;
    lrow--;
    lcolumn--;

}

let resArr=[];
let tempArr=[];

let num=res.split(" ");

for(let i=0;i<num.length-1;i++){
    if(i%arr[0].length<arr[0].length){
        tempArr.push(num[i]);
    }

    if(i%arr[0].length==arr[0].length-1){
        resArr.push(tempArr);
        tempArr=[];
    }

}

console.log(resArr);






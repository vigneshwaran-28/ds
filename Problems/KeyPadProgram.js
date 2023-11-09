let arr=[[1,2,3],[4,5,6],[7,8,9]];

// let arr=[[1,7,6],[5,4,3],[2,9,8]];


// let passArr=[1,4,4,3,2,6];

let passArr=[6,9,5,4,3,1];


let totalTime=1;

for(let i=1;i<passArr.length;i++){

    if(passArr[i-1]==passArr[i]){
        continue;
    }
    else{
        if(checkStatus(passArr[i-1],passArr[i]))
            totalTime+=1;
        else
            totalTime+=2;
    }

}

function checkStatus(prevNum,curNum){
    let l=0,k=0;
    l1:
    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==curNum){
                l=i;
                k=j;
                break l1;
            }
        }


    }

    if(k-1>=0 && arr[l][k-1]==prevNum){
        return true;
    }

    else if(k+1<arr.length && arr[l][k+1]==prevNum){
        return true;
    }

    else if(l-1>=0 && arr[l-1][k]==prevNum){
        return true;
    }
    else if(l+1<arr.length && arr[l+1][k]==prevNum){
        return true;
    }
return false;
}

console.log(totalTime);



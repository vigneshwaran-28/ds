let arr=[[1,2,3],[4,5,6],[7,8,9]];

// let arr=[[1,7,6],[5,4,3],[2,9,8]];


// let passArr=[1,4,4,3,2,6];
let passArr=[1,4,5,3,2,6];


let totalTime=1;

let map=new Map();



function getArrMap(curNum,l,k){
    let objArr=[];

    if(k-1>=0){
        objArr.push(arr[l][k-1]);
    }

     if(k+1<arr.length){
        objArr.push(arr[l][k+1]);
    }

     if(l-1>=0){
        objArr.push(arr[l-1][k]);
    }
     if(l+1<arr.length){
        objArr.push(arr[l+1][k]);
    }
    return objArr;
}


function createMap(){
    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr[i].length;j++){
            map.set(arr[i][j],getArrMap(arr[i][j],i,j));
        }
    }

}

function getTotalTime(){

    for(let i=1;i<passArr.length;i++){

        if(!(passArr[i-1]==passArr[i])){
            if(map.get(passArr[i]).includes(passArr[i-1]))
                totalTime+=1;
            else
                totalTime+=2;
        }

    }
}

createMap();


getTotalTime();

console.log(totalTime);



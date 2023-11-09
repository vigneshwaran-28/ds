/*

o(1),o(n),o(n square),o(logN),o(root of n),o(Nlogn),o(n cube),o(2 power n),o(n!),o(e power n)

*/

//o(1)

let arr=[1,2];

console.log(arr[0]);


//o(n)

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//o(n square)

for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length;j++){
        console.log(arr[i]);
    }

}


//o(log N)


for(let i=0;i<arr.length;i+=2){
    console.log(arr[i]);
}


//o(square root of n)- Grovers algorithm


//o(Nlogn)-merge sort


//o(n cube)-Three dimensional array


//o(2 power of n)-recursion,bit manipulation


//o(n!)-To find permutation,recursion


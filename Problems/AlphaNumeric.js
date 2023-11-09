let str="10ABC45FMG125CD";

// let str="12345";

let sum=0,tempNum=0,c=0;

for(let i=0;i<str.length;i++){
    
    if(!isNaN(str.charAt(i))){
        if(c==0)
         tempNum+=parseInt(str.charAt(i));
        else
          tempNum=tempNum*10+parseInt(str.charAt(i));
        c++;
    }

    else{
        sum+=tempNum;
        tempNum=0;
        c=0;
    }
    
}

sum+=tempNum;

console.log(sum);












  // if( str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57 ){
        
    //     let tempStr="";
        
    //     while(i<str.length && str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
    //         tempStr+=str.charAt(i);
    //         i++;
    //     }

    //     i-=1;
    //     sum+=parseInt(tempStr);
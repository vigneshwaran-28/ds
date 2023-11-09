var ip="PAYPALISHIRING";
var row=4,idx=row+row-2,a=0,i=0;
var op="";
while(a!=row){
    i=a;
    while(i<ip.length){
        op+=ip.charAt(i);
        i+=idx;
        if(a!=0){
            op+=ip.charAt(i);
            i+=a*2;
        }
    }
    a+=1;
    if(a==row-1){
        idx=row+row-2;
    }
    else{
        idx-=2;
    }
}
console.log(op);


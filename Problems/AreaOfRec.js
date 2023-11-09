const readline=require("readline-sync");

let ax1,ax2,bx1,bx2,ay1,ay2,by1,by2;

ax1=readline.question("Ax1:");
ay1=readline.question("Ay1:");
ax2=readline.question("Ax2:");
ay2=readline.question("Ay2:");
bx1=readline.question("Bx1:");
by1=readline.question("By1:");
bx2=readline.question("Bx2:");
by2=readline.question("By2:");

let xoverlap=Math.min(ax2,bx2)-Math.max(ax1,bx1);

let yoverlap=Math.min(ay2,by2)-Math.max(ay1,by1);

let intersection=0;

let areaOfIntersection=0,num1=0,num2=0;

if(xoverlap>0 && yoverlap>0){
    num1=xoverlap-yoverlap;
    num2=yoverlap-xoverlap;
}

// if(num1>num2)
    // areaOfIntersection=num1-num2;

// else
    areaOfIntersection=num2-num1;


function areaOfRec(x2,x1,y2,y1){
   return (x2-x1)*(y2-y1);
}



let totalArea=areaOfRec(ax2,ax1,ay2,ay1)+areaOfRec(bx2,bx1,by2,by1)-areaOfIntersection;

console.log(totalArea);
 






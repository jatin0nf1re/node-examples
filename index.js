var rect = require('./node-examples/rect.js');

function solveRect(l,b){
    if(l<=0 || b<=0){
        console.log("Invalid values of dimension");
    }else{
        console.log("Area of rectangle is - " + rect.area(l,b));
        console.log("Perimeter of rectangle is - " + rect.perimeter(l,b));
    }
}

solveRect(2,3);
solveRect(0,1);
solveRect(1343,1234);
solveRect(-1, -1);


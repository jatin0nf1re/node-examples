var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)
};

function solveRect(l,b){
    if(l<=0 || b<=0){
        console.log("Invalid values of dimension");
    }else{
        console.log("Area of rectangle is - " + rect.area(l,b));
        console.log("Perimeter of recanle is - " + rect.perimeter);
    }
}

solveRect(2,3);
solveRect(0,1);
solveRect(1343,1234);
solveRect(-1, -1);


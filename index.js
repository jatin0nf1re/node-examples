var rect = require('./rect.js');

function solveRect(l,b){
    console.log("Solving For : l=" + l, ' and b=' + b);
    rect(l, b, (err, rectangle) => {
        if(err){
            console.log("ERROR : " + err.message);
        }else{
            console.log("The area and perimeter for rectangle of length :" + l + " breadth:" + b + " are " + rectangle.area() + " and " + rectangle.perimeter());
        }

    });
}

solveRect(2,3);
solveRect(0,1);
solveRect(1343,1234);
solveRect(-1, -1);


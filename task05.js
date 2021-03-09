

function areaOfTriangle(x,y,z){
    var s =(x+y+z)/2;
    // return area
    return Math.sqrt(s*(s-x)*(s-y)*(s-z)) ;
}

areaOfTriangle(3,4,5);
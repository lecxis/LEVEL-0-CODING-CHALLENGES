

function maximum(){
    var max =arguments[0];
    for (var i=1; i<arguments.length; i++){
        if (arguments[i]>max){
            max=arguments[i];
        }
    }
  
    return max;    
}
maximum(4,8,90,1);
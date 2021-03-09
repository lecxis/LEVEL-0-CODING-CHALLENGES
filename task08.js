

function formatToTime(numb){
    var hr, min; hour='hour'; minute='minute';

    hr=Math.floor(numb/60);
    if(hr>1){
        hour='hours';
    }
    if(numb%60>0){
        min=numb%60;
        if (min>1){
            minute='minutes';
        }
        
    }
    else min=0;

    return hr+' '+hour+', '+min+' '+minute;
}

formatToTime(67);
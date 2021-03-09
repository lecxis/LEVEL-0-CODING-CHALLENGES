

function commonLetters(word1,word2){
    var word1=word1.split('');
    var word2=word2.split('');
    var common=[];
    for(var i=0; i<word1.length; i++){
       if (word2.includes(word1[i])) {
           if(!common.includes(word1[i])){
            common.push(word1[i]);
           }
          
       }
    }

    return 'Common letters: '+common;
}
commonLetters('wHippotaeemus','wamusement')

 
function findVowel(word){
    var vowel=['a','e','i','o','u','A','E','I','O','U'];
    var vowels=[]
    for(var i=0; i<word.length; i++){
       if (vowel.includes(word[i])) {
           vowels.push(word[i]);
       }
    }

    return 'Vowels: '+vowels;
}

console.log(findVowel('goat'));
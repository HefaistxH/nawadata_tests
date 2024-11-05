function SortCharacter (input){
    vowels = "aiueo"
    vowelsOrder = ""
    vowelsArr = []
    consonantArr = []
  
    //checks chars
    for (let char of input.toLowerCase()){
      if (vowels.includes(char)){
        vowelsArr.push(char)
        if (!vowelsOrder.includes(char)){
          vowelsOrder += char
        }
      }else if (char.match(/[a-z]/)){
        consonantArr.push(char)
      }
    }
    //sorts vowels
    vowelsArr.sort((a,b) => vowelsOrder.indexOf(a) - vowelsOrder.indexOf(b))
  
    return{
      vowels: vowelsArr.join(''),
      consonants: consonantArr.join('')
    }
  }
  
  //Testing
  let inputString = "Sample Case"; 
  let result = SortCharacter(inputString)
  console.log("Vowel Characters:", result.vowels); 
  console.log("Consonant Characters:", result.consonants);
  
  let inputString2 = "Next Case"; 
  let result2 = SortCharacter(inputString2)
  console.log("Vowel Characters:", result2.vowels); 
  console.log("Consonant Characters:", result2.consonants);
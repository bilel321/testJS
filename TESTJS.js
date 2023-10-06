function Test(sentence) {
    function vowelsNumber(props) {
      const vowels = "AEIOUaeiou";
      let number = 0;
      for (let i = 0; i < props.length; i++) {
        if (vowels.includes(props[i])) {
          number++;
        }
      }
      return number;
    }
  
    const words = sentence.match(/[a-zA-Z]+/g); 
    if (!words) {
      return null; 
    }
  
    let longest = "";
    let maxVowels = -1;
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > longest.length) {
        longest = word;
        maxVowels = vowelsNumber(word);
      } else if (word.length === longest.length) {
        const numVowels = vowelsNumber(word);
        if (numVowels > maxVowels) {
          longest = word;
          maxVowels = numVowels;
        }
      }
    }
  
    return longest;
  }
  
  const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";
  console.log("longest word:", Test(sentence)); 
  
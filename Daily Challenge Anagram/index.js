function isAnagram(str1, str2) {
    // Remove whitespace and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
  
    // Check if the strings have the same length
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create objects to store the character counts
    const count1 = {};
    const count2 = {};
  
    // Count the characters in each string
    for (let char of str1) {
      count1[char] = (count1[char] || 0) + 1;
    }
    for (let char of str2) {
      count2[char] = (count2[char] || 0) + 1;
    }
  
    // Compare the character counts
    for (let char in count1) {
      if (count1[char] !== count2[char]) {
        return false;
      }
    }
  
    return true;
  }



  console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
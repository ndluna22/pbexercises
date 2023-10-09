// add whatever parameters you deem necessary

/****constructNote****/

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
//using frequency counter
function noteCounter() {
  const freqCounter = new Map();
  for (let val of str) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }
  return freqCounter;
}
//accepts two strings {}, message or letters
//return true --> message === letters
//faslse -->  message ==! letters
function constructNote(message, letters) {
  if (str1.length !== str2.length) return false;
  const charMap1 = noteCounter(message);
  const charMap2 = noteCounter(letters);
  console.log(charMap1, charMap2);
}

constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true

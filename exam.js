// answer 1 :
function uniqueCharDistance(str) {
    const lastIndexMap = {};
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (lastIndexMap.hasOwnProperty(ch)) {

      if (i - lastIndexMap[ch] < 3) {
        return "no";
      }
    }
    lastIndexMap[ch] = i;
  }
  return "yes";
}
console.log(uniqueCharDistance("abcadca"));

// answer 2:
function longestStreak(arr) {
  let maxStreak = 0;
  let curStreak = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      curStreak++;
      maxStreak = Math.max(maxStreak, curStreak);
    } else {
      curStreak = 1;
    }
  }
  return maxStreak;
}
console.log(longestStreak([1,2,3,1,2,5,6,1]));


//answer 3 :
function flatten(obj, prev = "") {
  let result = {};
  for (let key in obj) {
    let newKey = prev ? `${prev}.${key}` : key;
    // console.log(prev)
    // console.log(newKey)
    if (typeof obj[key] === "object") {
      Object.assign(result, flatten(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
} 
let obj = {
  a: {
    d: {
      c: {
        f: 1
      },
    },
    b: 2,
  },
  e: 3,
};
console.log(flatten(obj));

// answer 4 :
function reverseWords(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "." ||
      word[i] === "," ||
      word[i] === "!" ||
      word[i] === "?"
    ) {
      result += word[i];
    } else {
      result = word[i] + result;
    }
    // console.log(result)
  }
  return result;
}
function reverseWordString(str) {
  let words = str.split(" ");
  //   console.log(words)
  let reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    let revWord = reverseWords(words[i]);
    reversedWords.push(revWord);
  }
  return reversedWords.join(" ");
}
console.log(reverseWordString("how, are you?"));


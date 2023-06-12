// 1.To print ODD Numbers in an array.
let odd = (arr) => {
	for ( i=0; i<arr.length; i++){
		if(arr[i]%2 != 0){
			console.log(arr[i]);
		}
	}
}
let arr = [1,2,3,4,5,6,7,8,9];
odd(arr);


//2.To convert title caps in a string array.
const convertToTitleCaps = (arr) => {
    const titleCapsArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      const words = arr[i].split(' ');
      let titleCaseWord = '';
  
      for (let j = 0; j < words.length; j++) {
        const word = words[j];
        const titleCase = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        titleCaseWord += titleCase + ' ';
      }
  
      titleCapsArray.push(titleCaseWord.trim());
    }
    
    return titleCapsArray;
  };
  
const strings = ["hello", "world", "javascript"];
const titleCapsStrings = convertToTitleCaps(strings);
console.log(titleCapsStrings);


//3.To print sum of all number in an array.
let add = (...arr)=> {
    let sum = 0;
    arr.forEach(ele => sum += ele)
    console.log(sum);
}
add(1,2,3,4,5,6,7,8,9);


//4.To print all the prime num in an array.
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10,11];

let Prime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let primeNumbers = numbers.filter(Prime);
console.log(primeNumbers);


//5.To print all the palindrome in an array.
let numbers = [121, 123, 444, 555, 678, 787, 989];

let Palindrome = num => {
    let str = String(num);
    let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

let palindromeNumbers = numbers.filter(Palindrome);
console.log(palindromeNumbers);



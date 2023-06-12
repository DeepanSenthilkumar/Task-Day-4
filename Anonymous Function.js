//1.To print ODD Numbers in an array.
let arr = [1,2,3,45,5,6,7,8,9];
let odd = function(arr) {
	for ( i=0; i<arr.length; i++){
		if(arr[i]%2 != 0){
			console.log(arr[i]);
		}
	}
}

odd(arr);


//2.To convert title caps in a string array.
const convertToTitleCaps = function(arr) {
    const titleCapsArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let titleCaseWord = '';
      const words = arr[i].split(' ');
  
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
let add = function (...arr){
    let sum = 0;
    arr.forEach(ele => sum += ele)
    console.log(sum);
}
add(1,2,3,4,5,6,7,8,9);


//4.To print all the prime num in an array.
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10,11];

let Prime = function(num) {
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

let Palindrome = function(num) {
    let str = String(num);
    let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

let palindromeNumbers = numbers.filter(Palindrome);
console.log(palindromeNumbers);


//6.To print median of two sorted arrays of the same size.
let findMedian = function(arr1, arr2) {
    let mergedarray = [...arr1, ...arr2];
    let sortedarray = mergedarray.sort(function(a, b) {
      return a - b;
    });
  
    let midIndex = Math.floor(sortedarray.length / 2);
  
    if (sortedarray.length % 2 === 0) {
        let median = (sortedarray[midIndex - 1] + sortedarray[midIndex]) / 2;
      return median;
    } else {
      return sortedarray[midIndex];
    }
  };
  

  let array1 = [1, 3, 5];
  let array2 = [2, 4, 6];
  let median = findMedian(array1, array2);
  
  console.log("Median:", median);


//7.To remove duplicates from an array.
let removeDuplicates = function(arr) {
    let uniqueArray = arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  
    return uniqueArray;
  };
  

  let array = [1, 2, 2, 3, 4, 4, 5];
  let uniqueArray = removeDuplicates(array);
  
  console.log("Unique Array:", uniqueArray);


//8.To rotate an array by k times.
let rotatearray = function(arr, k) {
    let rotations = k % arr.length; 
  
    if (rotations === 0) {
      return arr; 
    }
  
    let rotatedarray = [...arr.slice(rotations), ...arr.slice(0, rotations)];
  
    return rotatedarray;
  };
  

  let array = [1, 2, 3, 4, 5];
  let k = 3;
  let rotatedarray = rotatearray(array, k);
  
  console.log("Rotated Array:", rotatedarray);




// 1.To print ODD Numbers in an array.
let arr = [1,2,3,4,5,6,7,8,9];
let odd = (function(arr){
    for ( i=0; i<arr.length; i++){
        if ( arr[i]%2 != 0){
            console.log(arr[i]);
        }
    }

})(arr);


//2.To convert title caps in a string array.
(function(arr) {
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
  
    console.log(titleCapsArray);
  })(["hello", "world", "javascript"]);


//3.To print sum of all number in an array.
var add = (function (...arr){
    let sum = 0;
    arr.forEach(ele => sum += ele)
    console.log(sum);
})(1,2,3,4,5,6,7,8,9)


//4.To print all the prime num in an array.
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

var prime = (function(num) {
  const isPrime = num => {
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

  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      console.log(numbers[i]);
    }
  }
})();


//5.To print all the palindrome in an array.
let numbers = [121, 123, 444, 555, 678, 787, 989];

let palindromeNumbers = (() => {
    let Palindrome = num => {
    let str = String(num);
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  return numbers.filter(Palindrome);
})();

console.log(palindromeNumbers);


//6.To print median of two sorted arrays of the same size.
let median = (function(arr1, arr2) {
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

  })([1, 3, 5], [2, 4, 6]);
  
  console.log("Median:", median);


//7.To remove duplicates from an array.
let uniqueArray = (function(arr) {
    let uniqueArray = arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  
    return uniqueArray;
  })([1, 2, 2, 3, 4, 4, 5,55,5]);
  
  console.log("Unique Array:", uniqueArray);


//8.To rotate an array by k times.
  let rotatedarray = (function(arr, k) {
    let rotations = k % arr.length; 
  
    if (rotations === 0) {
      return arr; 
    }
  
    let rotatedarray = [...arr.slice(rotations), ...arr.slice(0, rotations)];
  
    return rotatedarray;
  })([1, 2, 3, 4, 5, 7, 9], 3);
  
  console.log("Rotated Array:", rotatedarray);




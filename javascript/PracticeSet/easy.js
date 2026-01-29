function findSmallest(arr) {
  // your solution here
  if(!arr || typeof arr == 'undefined' || -Infinity || +Infinity) return false;
  if (arr.length == 0) return null;
  if (arr.length == 1) return arr[0];  
  let currentElement = arr[0];
  for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'string') return false;
    for (let j = i+1; j < arr.length; j++){
      if (arr[j]<currentElement) {
        currentElement = arr[j];
        // console.log(arr[j]);
        
    }
    }
  }
 return currentElement;
}
let arr = []
console.log(findSmallest(undefined));

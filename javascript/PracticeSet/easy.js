function findSmallest(arr) {
  // your solution here
  if(!Array.isArray(arr)) return false;
  
  if(arr.length == 1) return arr[0];
  
  if(arr.length == 0) return null;
  
  let smallest = -999999;
  
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) return false;   
      if(arr[i] < smallest){
        smallest = arr[i];
      }
  }
  return smallest


}

function minimumMaximumOfArray(arr,minCheck) {
  
  if(!Array.isArray(arr)) return false;
  
  if(arr.length === 0 ) return null;
  
  if(arr.length == 1) return arr[0]; 
  console.log(minCheck);
  
  if (minCheck){ 
    let min = +9999999;
    if(typeof minCheck !== 'boolean') return `plese give min : boolen true of false`
    for (let i = 0; i < arr.length; i++) {
        // checking the edge casses;  
        // if it is any thing but not a number will return false;
        if(typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) return false;
        if(arr[i] < min ){
            min = arr[i]
          }      
    }
    return min;
  }
  else{ 
    let max = -9999999;

    for (let i = 0; i < arr.length; i++) {
        // checking the edge casses;  
        // if it is any thing but not a number will return false;
        if(typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) return false;
        if(arr[i] > max ){
            max = arr[i]
          }      
    }
    return max;
  }

}

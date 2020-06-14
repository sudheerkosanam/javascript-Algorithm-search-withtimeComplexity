function findElement(arr, element){
 // Other methods
 // return arr.includes(element);
 // arr.find(()=>{});
 // arr.findIndex((el)=> el === 5);
  for (i = 0 ; i <= arr.length; i++){
      if (arr[i] === element) return i;
  }
}

const arr = [5, 3, 10, -10, 33, 51]

// Time Complexity 
// Best Case    :If  the item is first     => O(1) -> 
// Average case :if items are random order => O(n)
// Worst case   :the item is last          => O(n)

console.log(findElement(arr, 10));
console.log(findElement(arr, 33));

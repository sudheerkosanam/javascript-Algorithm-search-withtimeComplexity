function findElement(sortedArr, element, offset) {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

        const middleIndex =  Math.floor((endIndex - startIndex) / 2);
    
        if (element === sortedArr[middleIndex]){
            return middleIndex + offset;
        }
        if(sortedArr[middleIndex] < element){
            startIndex = middleIndex + 1;
            offset = offset + middleIndex + 1;
         //   return findElement(sortedArr.slice(startIndex, endIndex), element);
        } else {
            endIndex = middleIndex ;
        }
        //O(1)
        return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset);

}
// Recursion way of making search
//The Master theorem of time complexity 
// O(n^logb a)
//a = no .of sub problems (no. of recursion splits)
//b = relative sub problem size(input reduction per split)
//
// so here in the problem we have a = 1 & b = 2
//O(n^logb a) => O(n^log2 1) => O(n^0) => O(1)
// Overall algorithm time complexity
//O(n^logb a * log n) => )(1 * log n) => O(log n)

const arr = [1, 5, 9, 3, 99, 100];

console.log(findElement(arr, 5, 0));

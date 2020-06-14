function findEle(sortedArr, element){
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    while (startIndex <= endIndex){
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    
        if (element === sortedArr[middleIndex]){
            return middleIndex
        }
        if(sortedArr[middleIndex] < element){
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }

    }

}
//Time Complexity
//Best Case    =>item is right middle     =>O(1)
//Average Case =>item at beginning or end =>O(log n) - Because we split the array half in every iteration
//Worst Case   =>we dnt know where item is=>O(log n)


const arr = [1, 5, 9, 13, 99, 100]; 

console.log(findEle(arr, 99));

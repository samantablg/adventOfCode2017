function getMin(array) {
    let min = array[0];
    for(let i = 0; i < array.length-1; i++) {
      if (array[i] > array[i+1] & array[i+1] < min) {
        min = array[i+1];
      }
    }
  
    return min;
  } 
  
  function getMax(array) {
    let max = array[0];
    for(let i = 0; i < array.length-1; i++) {
      if (array[i+1] > array[i] & array[i+1] >= max) {
        max = array[i+1];
      }
    }
  
    return max;
  } 
  
  function checkSum(array1,array2,array3) {
    let file1 = getMax(array1)-getMin(array1);
    let file2 = getMax(array2)-getMin(array2);
    let file3 = getMax(array3)-getMin(array3);
    let sum = file1+file2+file3;
  
    return sum;
  }
  
  const proof = checkSum([5, 1, 9, 5],[7, 5, 3],[2, 4, 6, 8]);
  console.log(proof);

module.exports = checkSum;
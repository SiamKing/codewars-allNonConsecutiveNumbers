function allNonConsecutive (arr) {
 let newArr = [];

 for (let j = 1; j < arr.length; j++) {
   if (arr[j] - arr[j - 1] > 1) {
     newArr.push({i: j, n: arr[j]});
    }
  }
  return newArr;
}

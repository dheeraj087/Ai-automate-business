let arr = ["a", "b", "c", "d"];

let evenSum = arr.reduce((acc, curr,index,arr) => {
acc[curr]=arr[index+1] ||arr[0];
    return acc;
},{});
console.log(evenSum); // 12
export default evenSum;

/* Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The 
function should multiply each element of the array by 2 and pass the result to the callback.
*/


function multiplyWithCallback(arr, callback) {
    arr.forEach((item) => {
        callback(item * 2)
    })
}
const arr = [2, 5];

multiplyWithCallback(arr, (result) => {
    console.log(result)
})


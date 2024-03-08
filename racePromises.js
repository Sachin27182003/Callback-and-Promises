

/* Create a function racePromises that takes an array of promises and returns the result of the first promise that 
resolves or rejects. Use Promise.race() to implement this.
*/


function racePromises(promises) {
     Promise.race(promises).then((value) => {
        console.log(value)
     })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("From Promise 1")
    },2000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("From Promise 2")
    },1000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("From Promise 3")
    },3000)
})

const promises = [promise1, promise2, promise3]

racePromises(promises)

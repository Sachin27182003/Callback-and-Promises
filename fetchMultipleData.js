/* Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the 
URLs concurrently. Return an array of responses.

APT To be used : https://jsonplaceholder.typicode.com/todos/1
*/

async function fetchMultipleData(urls){

    const promises = urls.map(async (url) => {
        const response = await fetch(url)
        return response.json()
    })

    return Promise.all(promises)

}


const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
];


fetchMultipleData(urls)
            .then((responses) => {
                console.log(responses)
            })


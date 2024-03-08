/* Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns 
the parsed JSON response.
*/

async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (response.ok) {
       return response.json();
    } else {
       throw new Error('Network response was not ok');
    }}
    catch (error) {
    throw new Error(error.message);
}}



fetchData()
    .then((data) => {
        console.log("Data fetched successfully");
        console.log(data)
    })
    .catch((err) => {
        console.log(err.message)
    })


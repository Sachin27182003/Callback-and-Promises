/* 

Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts 
using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are 
fetched. Return an object with user details and posts.

for users: https://jsonplaceholder.typicode.com/users/$%7BuserId
for posts: https://jsonplaceholder.typicode.com/posts?userId=$%7BuserId
*/

// async function fetchUserDataAndPosts(userId){

 
//         try{
//             const users_details = await fetch(`https://jsonplaceholder.typicode.com/users/$%7B${userId}`)
//              if(users_details.ok){
//                 const users_posts = fetch(`https://jsonplaceholder.typicode.com/posts?userId=$%7B${userId}`)
//                 return (await users_details).json(), (await users_posts).json();
//             } else {
//                 throw new Error('Network response was not ok')
//             }}catch(error){
//                 throw new Error(error.message);
//             };

// }

// fetchUserDataAndPosts("Sachin")
//                 .then((response)=>{
//                     console.log("Data fetched successfully")
//                     console.log(response)
//                 })
//                 .catch((error) => {
//                     console.error(error.message)
//                 })


                

async function fetchUserDataAndPosts(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/$%7B${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=$%7B${userId}`)
        .then((response) => response.json())
        .then((posts) => ({user: userData, posts}));
    });

}

fetchUserDataAndPosts(1)
   .then((result) => {
         console.log(result);
        })
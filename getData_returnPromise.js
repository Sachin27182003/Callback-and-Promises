/* Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message 
"Data fetched successfully."

*/

// function getData(){

//     return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Data fetched successfully")  
//         }, 2000)
//     }, (reject) => {
//         console.log("Error while fetching data")
//     })
// }

// getData(44)

async function getData() {
    return new Promise( (resolve, reject) => {
       setTimeout(() => {
         try {
          if (Math.random() < 0.5) {
            resolve("Data fetched successfully");
          } else {
            reject("Error while fetching data");
          }
        } catch(error) {
          reject(error);
        }
      }, 2000);
    });
  }


  getData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

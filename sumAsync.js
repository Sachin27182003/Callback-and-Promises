

//Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after 
//a delay of 1 second.

function sumAsync(a, b){
      
   return function(){
        return a+b;
   }
       
}

const sum = sumAsync(5,6)

   setTimeout(() => {
       console.log(sum())
   }, 1000)


   function sumAsync(a, b, callback) {
      setTimeout(() => {
          const sum = a + b;
          callback(sum);
      }, 1000);
  }
  
  // Example usage:
  sumAsync(3, 4, (result) => {
      console.log("The sum is: " + result);
  });
  


 
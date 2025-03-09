function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fectched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
.then((data) =>{
    console.log(data)
    return `pass on!`
})
.then((value)=>{
console.log(value);

})
.catch((error)=> console.log(error))

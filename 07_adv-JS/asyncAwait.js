function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
    // async keyword lets JS engine know that you are declaring an asynchronous function.
  try {
    console.log(`fetching user data...`);
    
    const userData = await fetchUserData();
    // await keyword pauses the execution of its surrounding async function until the promise is settled(resolved or rejected).  
    console.log("user data:", userData);

    console.log(`user data fetched successfully`);
  } catch (error) {
    console.log("error fetching data", error);
  }
}

getUserData()
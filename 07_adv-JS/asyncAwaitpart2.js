function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data Fetched Successfuly");
    }, 2000);
  });
}
function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data Fetched Successfully");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");
// There are times when we have to deal woth multiple promises and to work with that

    // const blogData = await fetchPostData();
    // const CommentData = await fetchCommentData();

    const[blogData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
    console.log(blogData);
    console.log(commentData);

    console.log("Blog data fetched successfully");
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}

getBlogData();
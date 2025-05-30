const getNewPost = (req, res) => {
  res.render("newPost", { title: "New Post" });
};

export default getNewPost;

import * as db from "../db/queries.js";

const postNewPost = async (req, res) => {
  const { username } = req.body;
  console.log(username);
  await db.insertUsername(username);
  res.redirect("/");
};

export default postNewPost;

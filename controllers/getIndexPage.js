import * as db from "../db/queries.js";
import { searchUsername } from "../db/queries.js";

const getIndexPage = async (req, res) => {
  let searchResult = await searchUsername(req.query.search);
  if (searchResult.length > 0) {
    res.render("index", { title: "Names", usernames: searchResult });
  } else {
    const usernames = await db.getAllUsernames();
    res.render("index", { title: "Names", usernames });
  }
};

export default getIndexPage;

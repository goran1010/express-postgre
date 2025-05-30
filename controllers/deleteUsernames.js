import { deleteAllUsernames } from "../db/queries.js";

export default async function deleteUsernames(req, res) {
  await deleteAllUsernames();
  res.redirect("/");
}

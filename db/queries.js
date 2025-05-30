import pool from "./pool.js";

export async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

export async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export async function searchUsername(name) {
  const { rows } = await pool.query(
    `SELECT * FROM usernames WHERE username LIKE ($1)`,
    [name]
  );
  return rows;
}

export async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

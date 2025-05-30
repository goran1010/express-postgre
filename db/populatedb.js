#! /usr/bin/env node

import { Client } from "pg";
import { argv } from "node:process";
import dotenv from "dotenv";
dotenv.config();

const ROLENAME = process.env.ROLENAME;
const ROLEPASSWORD = process.env.ROLEPASSWORD;

const DBLINK = argv[2];

const SQL = `

CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${ROLENAME}:${ROLEPASSWORD}@${DBLINK}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

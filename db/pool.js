import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const ROLENAME = process.env.ROLENAME;
const ROLEPASSWORD = process.env.ROLEPASSWORD;

// Again, this should be read from an environment variable
export default new Pool({
  connectionString:
    "postgresql://" +
    ROLENAME +
    ":" +
    ROLEPASSWORD +
    "@localhost:5432/top_users",
});

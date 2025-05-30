import { Router } from "express";
const indexRouter = Router();

import getIndexPage from "../controllers/getIndexPage.js";
import getNewPost from "../controllers/getNewPost.js";
import postNewPost from "../controllers/postNewPost.js";
import deleteUsernames from "../controllers/deleteUsernames.js";

indexRouter.get("/", getIndexPage);

indexRouter.get("/new", getNewPost);

indexRouter.post("/new", postNewPost);

indexRouter.get("/delete", deleteUsernames);

export default indexRouter;

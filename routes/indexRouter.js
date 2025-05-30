import { Router } from "express";
const indexRouter = Router();

import getIndexPage from "../controllers/getIndexPage.js";
import getNewPost from "../controllers/getNewPost.js";
import postNewPost from "../controllers/postNewPost.js";

indexRouter.get("/", getIndexPage);

indexRouter.get("/new", getNewPost);

indexRouter.post("/new", postNewPost);

export default indexRouter;

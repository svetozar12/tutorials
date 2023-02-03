import * as express from "express";
import items from "./Items";
import home from "./home";

const index = express.Router();

index.use("/", home);
index.use("/weapons", items);

export default index;

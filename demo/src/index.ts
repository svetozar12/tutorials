import express from "express";
import router from "./routes";
import { initSwagger } from "./swagger";

const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
initSwagger(app);
app.listen(PORT, () => console.log("Listening", PORT));

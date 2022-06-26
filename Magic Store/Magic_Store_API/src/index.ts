import * as express from "express";
import * as cors from "cors";
import index from "./router";
import { connect } from "./config";
const app = express();

// config
connect();
// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Routes
app.use("/api", index);
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Dev server on: http://localhost:${PORT}`);
});

export default app;

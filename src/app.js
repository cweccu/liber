import express from "express";
import path from "path";
import restRouter from "./routes/rest.js";
import viewRouter from "./routes/view.js"

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname.substring(0, -4));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "res/views"));

app.use(express.static(path.join(__dirname, "res")));
app.use("/", viewRouter);
app.use("/rest", restRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

import express from "express";
import cors from "cors";
import searchRoute from "./routes/search";

const app = express();
app.use(cors());

app.use("/api/search", searchRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

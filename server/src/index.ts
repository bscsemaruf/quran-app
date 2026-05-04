import express from "express";
import cors from "cors";
import searchRoute from "./routes/search";

const app = express();
app.use(cors());

app.use("/api/search", searchRoute);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});

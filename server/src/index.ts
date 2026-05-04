import express from "express";
import cors from "cors";
import searchRoute from "./routes/search";

const app = express();

// ✅ middlewares
app.use(cors());
app.use(express.json());

// ✅ routes
app.use("/api/search", searchRoute);

// ✅ port handling (VERY IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

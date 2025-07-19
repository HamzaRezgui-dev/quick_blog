import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello world"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port:" + PORT);
});

export default app;

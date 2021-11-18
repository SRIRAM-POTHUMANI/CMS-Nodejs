
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import { faqRouter } from "./routes/faq.js";
import { pricingRouter } from "./routes/pricing.js";
import { userRouter } from "./routes/users.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

export async function createConnection() {
  const MONGO_URL = process.env.MONGO_URL;
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Successfull 💚");
  return client;
}
createConnection();

app.get("/", (request, response) => {
  response.send("Hello, Welcome to Hackathon...:)");
});

// app.use("/auth", registerRouter);
app.use("/users", userRouter);
app.use("/faq", faqRouter);
app.use("/pricing", pricingRouter);

app.listen(PORT, () => console.log("Our Server Started on Port: ", PORT));

import {getfaqs, getfaqbyid} from "../helper.js";
import express from "express";
import { createConnection } from "../index.js";

const router=express.Router();


// get faq
router.get("/", async (request, response) => {
  const client = await createConnection();
  const faq = await getfaqs(client);
  response.send(faq);
});

//get faq by username from cloud
router.get("/:name", async (request, response) => {
  const { name } = request.params;
  const client = await createConnection();
  const faq = await getfaqbyid(client, name);
  response.send(user);
});

export const faqRouter = router;

import {getpricing, getpricingbyid} from "../helper.js";
import express from "express";
import { createConnection } from "../index.js";

const router=express.Router();


// get faq
router.get("/", async (request, response) => {
  const client = await createConnection();
  const Plan = await getpricing(client);
  response.send(Plan);
});

//get faq by username from cloud
router.get("/:name", async (request, response) => {
  const { plan } = request.params;
  const client = await createConnection();
  const Plan = await getpricingbyid(client, plan);
  response.send(Plan);
});

export const pricingRouter = router;

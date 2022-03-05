const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("STRIP KEY HERE");

//API

//App config
const app = express();

//Middle wares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes

app.get("/", (request, response) => response.status(200).send("hello word"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "cad",
  });
  // 201 = OK -Create
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-549aa/us-central1/api

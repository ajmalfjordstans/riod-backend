import express from "express"
import bodyParser from "body-parser";
import cors from 'cors'

import dotenv from 'dotenv';
import { contactForm, contactFormConfirmationSConcierge, contactFormSConcierge, subscription } from "./services/emailService.js";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://rnd.riod.co.uk','https://signature-concierge.co.uk','https://www.signature-concierge.co.uk','https://sconcierge.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type'],
    optionsSuccessStatus: 204,
  })
)

app.post("/contact-us", (req, res) => {
  try {
    const formData = req.body;
    // Send email to admin
    contactForm(formData, "New Enquiry")
    res.status(201).send(formData);
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})
app.post("/contact-us-sconcierge", (req, res) => {
  try {
    const formData = req.body;
    // Send email to admin
    contactFormSConcierge(formData, "New Enquiry")
    // Send Confirmation mail
    contactFormConfirmationSConcierge(formData)
    res.status(201).send(formData);
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})
app.post("/newsletter", (req, res) => {
  try {
    const formData = req.body;
    subscription(formData)
    res.status(201).send(formData);
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})


// start the server
app.listen(3005, () => {
  console.log(`Server listening on port 3005`);
});
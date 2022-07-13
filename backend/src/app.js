const express = require("express");
require("../src/db/connection");
const Hostel_data = require("../src/models/hostel_schema");
const app = express();
const port = process.env.port || 3000;

app.get("/Hostel", async (req, res) => {
  try {
    const data = await Hostel_data.find({});
    res.status(201).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/Hostel/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Hostel_data.findById({ _id });
    res.status(201).send(data);
  } catch (err) {
    res.send(err);
  }
});

app.patch("/Hostel/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Hostel_data.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/Hostel/:id", async (req, res) => {
  try {
    const data = await Hostel_data.findByIdAndDelete(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Connection is live at port ${port}`);
});

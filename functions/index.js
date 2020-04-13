const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const missionPreviews = require("./missionPreviews.json");
const missions = require("./missions.json");

app.use(cors({ origin: true }));

app.get("/:id", (req, res) => {
  const mission = missions.find((mission) => mission.id === req.params.id);

  if (mission) res.json(mission);

  res.status(404).send();
});

app.get("/", (_, res) => res.json(missionPreviews));

exports.missions = functions.https.onRequest(app);

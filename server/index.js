const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mockDb = [
  "pencil",
  "pen",
  "sticker",
  "dirt",
  "leaf",
  "rock",
  "hippopotamus",
  "spiders",
  "mouse",
  "soccerball",
];

app.get("/api/inventory", (req, res) => {
  console.log("hit");
  //   res.sendStatus(200);
  res.status(200).send(mockDb);
  console.log("hit2");
});

app.listen(5050, () => console.log("Server running on port 5050"));

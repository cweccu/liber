import express from "express";

const router = express.Router();

router.get("/rest/book", (req, res) => {
  res.send("Client connected: /rest/book");
});

export default router;

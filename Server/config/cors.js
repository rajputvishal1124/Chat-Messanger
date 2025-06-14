const cors = require("cors");

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

  allowedHeaders: ["Content-Type", "authorization"],
  "Access-Control-Allow-Origin": "*",

  origin: "http://localhost:5173",
};

module.exports = cors(corsOpts);

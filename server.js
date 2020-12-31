const express = require("express");
const fs = require("fs");
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

// create express server
const app = express();
const PORT = process.env.PORT || 3000;

// middleware for data parsing
app.use(express.static("public"));
app.use(express.json);
app.use(express.urlencoded({extended: true}));


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log("listening on PORT: " + PORT))
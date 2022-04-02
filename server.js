const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get("mongoUri");

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/favourite", require("./routes/FavouritesManager"));
app.use("/api/users", require("./routes/UserManager"));
app.use("/api/auth", require("./routes/AuthManager"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("nihongo/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "nihongo", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

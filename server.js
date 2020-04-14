const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

app.use(express.static('./uploads/'))
app.use('/api/pics', require("./routes/pics"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`)
});


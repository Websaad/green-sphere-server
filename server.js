const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/greensphere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api", userRoutes);


const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

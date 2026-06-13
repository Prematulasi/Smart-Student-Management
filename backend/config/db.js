const mongoose = require("mongoose");

function maskHostFromUri(uri) {
  try {
    const m = uri.match(/@([^/]+)/);
    return m ? m[1] : uri;
  } catch (e) {
    return uri;
  }
}

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    if (!process.env.MONGO_URI) {
      console.error("MONGO_URI is not set in environment (.env) — please set it and restart the server");
    } else {
      console.log("Mongo host:", maskHostFromUri(process.env.MONGO_URI));
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Error:", error.stack || error.message || error);
    process.exit(1);
  }
};

module.exports = connectDB;
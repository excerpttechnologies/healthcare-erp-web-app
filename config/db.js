const mongoose = require("mongoose");
const User = require("../models/userModel");

const createDefaultAdmin = async () => {
  const adminEmail = "admin@evahealth.com";
  const existing = await User.findOne({ email: adminEmail });
  if (!existing) {
    await User.create({
      name: "Administrator",
      email: adminEmail,
      password: "password123",
      role: "admin",
    });
    console.log("Default admin user created: admin@evahealth.com / password123");
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);

    // If an old unique index on username exists (from prior schema), remove it to avoid duplicate null errors
    try {
      await User.collection.dropIndex("username_1");
      console.log("Dropped legacy username index");
    } catch (err) {
      // ignore if index does not exist
    }

    // Ensure a default admin user exists for development
    await createDefaultAdmin();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

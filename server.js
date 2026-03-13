const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

// Load environment variables from backend/.env
dotenv.config({ path: path.join(__dirname, ".env") });

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const medicalRecordRoutes = require("./routes/medicalRecordRoutes");
const billingRoutes = require("./routes/billingRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const staffRoutes = require("./routes/staffRoutes");
const bedsWardsRoutes = require("./routes/bedsWardsRoutes");
const ambulanceRoutes = require("./routes/ambulanceRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const laboratoryRoutes = require("./routes/laboratoryRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/medical-records", medicalRecordRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/beds-wards", bedsWardsRoutes);
app.use("/api/ambulance", ambulanceRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/laboratory", laboratoryRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/uploads", uploadRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

# EvaHealth Connect Backend

This backend is a generated Express + MongoDB API designed to support the existing frontend application in this repository. It exposes CRUD endpoints for key hospital management entities and includes JWT authentication.

## 🚀 Quick Start

```bash
cd backend
npm install
npm run dev
```

The server will listen on `` by default.

## ✅ Built-in Features

- MongoDB + Mongoose (models auto-created based on frontend data structures)
- JWT authentication + protected routes
- Bcrypt password hashing
- Multer file upload support (`/api/uploads`)
- CORS enabled
- MVC project structure
- Request validation and consistent error handling

## 📌 Environment Variables

Create a `.env` file in the `backend/` folder (already included):

```
PORT=8000
MONGO_URI=mongodb+srv://excerptvps_db_user:FHZ6b9XbkTo6eeWC@excerpterp.tx52fsw.mongodb.net/
JWT_SECRET=supersecretkey
```

## 🧩 API Reference

### Auth
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Login and get JWT
- `GET /api/auth/profile` → Get current user info (requires `Authorization: Bearer <token>`)

### CRUD Resources (JWT protected)

Each resource supports:
- `GET /api/<resource>` → List items
- `POST /api/<resource>` → Create item
- `GET /api/<resource>/:id` → Get by ID
- `PUT /api/<resource>/:id` → Update by ID
- `DELETE /api/<resource>/:id` → Delete by ID

Supported resources:
- `/api/patients`
- `/api/doctors`
- `/api/appointments`
- `/api/medical-records`
- `/api/billing`
- `/api/inventory`
- `/api/staff`
- `/api/beds-wards`
- `/api/ambulance`
- `/api/departments`
- `/api/laboratory`
- `/api/settings` (supports `POST /api/settings` to upsert settings)

### File Uploads

- `POST /api/uploads` (requires JWT)
  - Field name: `file`
  - Response includes a `path` that can be used to serve the file.

## 📌 Notes

- The frontend currently uses static mock data and does not call any backend endpoints.
- This backend is designed to be compatible with the UI data shapes so you can integrate the frontend to use these APIs when ready.

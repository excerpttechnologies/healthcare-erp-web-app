## Media API Examples

### POST `/api/media/upload`

Headers:
- `Authorization: Bearer <JWT>`
- `Content-Type: multipart/form-data`

Body (form-data):
- `file`: image or PDF file (required)
- `relatedEntity`: `patient` | `doctor` | `report` (optional)
- `relatedId`: MongoDB ObjectId of related entity (optional)

Example success response:

```json
{
  "message": "File uploaded successfully",
  "data": {
    "_id": "67b1a2f9e0d3c0c4a9f1b234",
    "fileName": "lab-report.pdf",
    "fileUrl": "/uploads/media/original/lab-report-1700000000000-123456789.pdf",
    "thumbnailUrl": null,
    "storageType": "local",
    "fileType": "pdf",
    "mimeType": "application/pdf",
    "size": 245678,
    "uploadedBy": "67b19fc5e0d3c0c4a9f1b123",
    "relatedEntity": "patient",
    "relatedId": "67b19ff1e0d3c0c4a9f1b456",
    "createdAt": "2026-02-25T10:15:30.000Z"
  }
}
```

### GET `/api/media/:id`

Headers:
- `Authorization: Bearer <JWT>`

Returns media metadata:

```json
{
  "data": {
    "_id": "67b1a2f9e0d3c0c4a9f1b234",
    "fileName": "xray.png",
    "fileUrl": "/uploads/media/original/xray-1700000000000-123456789.png",
    "thumbnailUrl": "/uploads/media/thumbnails/xray-1700000000000-123456789.png",
    "fileType": "image",
    "createdAt": "2026-02-25T10:20:00.000Z"
  }
}
```

To securely stream the file contents instead of metadata:

- Original image/PDF: `GET /api/media/:id?variant=original`
- Thumbnail (images only): `GET /api/media/:id?variant=thumbnail`

### GET `/api/media/entity/:type/:id`

Headers:
- `Authorization: Bearer <JWT>`

Query params:
- `page` (optional, default `1`)
- `limit` (optional, default `20`)

Example response:

```json
{
  "items": [
    {
      "_id": "67b1a2f9e0d3c0c4a9f1b234",
      "fileName": "blood-test.pdf",
      "fileType": "pdf",
      "relatedEntity": "patient",
      "relatedId": "67b19ff1e0d3c0c4a9f1b456"
    }
  ],
  "total": 12,
  "page": 1,
  "limit": 20,
  "totalPages": 1
}
```

### DELETE `/api/media/:id`

Headers:
- `Authorization: Bearer <JWT>`

Example response:

```json
{
  "message": "Media deleted successfully"
}
```

## Homepage Slides API Examples

### GET `/api/homepage/slides`

Public endpoint (no auth) for landing page slider.

Example response:

```json
{
  "data": [
    {
      "_id": "67b1a7b8e0d3c0c4a9f1c001",
      "title": "Unify Your Hospital Operations",
      "subtitle": "From appointments to billing, manage everything in one place.",
      "imageUrl": "https://cdn.example.com/hero-1.jpg",
      "buttonText": "Explore Dashboard",
      "buttonLink": "/dashboard",
      "order": 1,
      "isActive": true
    }
  ]
}
```

### POST `/api/homepage/slides`

Headers:
- `Authorization: Bearer <ADMIN JWT>`
- `Content-Type: application/json`

Body:

```json
{
  "title": "Transform Patient Care",
  "subtitle": "Real-time insights and automation for your facility.",
  "imageUrl": "https://cdn.example.com/hero-2.jpg",
  "buttonText": "Get Started",
  "buttonLink": "/dashboard",
  "order": 2,
  "isActive": true
}
```

### PUT `/api/homepage/slides/:id`

Headers:
- `Authorization: Bearer <ADMIN JWT>`

Body: any subset of slide fields to update.

### DELETE `/api/homepage/slides/:id`

Headers:
- `Authorization: Bearer <ADMIN JWT>`

Example response:

```json
{
  "message": "Slide deleted successfully"
}
```

## Setup Notes

- Set `MONGODB_URI` in `server/.env` to your MongoDB connection string.
- (Optional) Configure maximum upload size in MB using `MAX_FILE_SIZE_MB` in `server/.env`. Default is `5`.
- Media files are stored under `server/uploads/media` with separate `original` and `thumbnails` folders.


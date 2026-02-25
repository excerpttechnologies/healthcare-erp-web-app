import mongoose, { Schema, Document } from 'mongoose';

export type StorageType = 'local' | 'cloud';
export type MediaFileType = 'image' | 'pdf';
export type RelatedEntity = 'patient' | 'doctor' | 'report';

export interface IMedia extends Document {
    fileName: string;
    fileUrl: string;
    thumbnailUrl?: string;
    storageType: StorageType;
    fileType: MediaFileType;
    mimeType: string;
    size: number;
    uploadedBy: mongoose.Types.ObjectId;
    relatedEntity?: RelatedEntity;
    relatedId?: mongoose.Types.ObjectId;
    createdAt: Date;
}

const MediaSchema = new Schema<IMedia>(
    {
        fileName: { type: String, required: true },
        fileUrl: { type: String, required: true },
        thumbnailUrl: { type: String },
        storageType: {
            type: String,
            enum: ['local', 'cloud'],
            default: 'local',
        },
        fileType: {
            type: String,
            enum: ['image', 'pdf'],
            required: true,
        },
        mimeType: { type: String, required: true },
        size: { type: Number, required: true },
        uploadedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        relatedEntity: {
            type: String,
            enum: ['patient', 'doctor', 'report'],
        },
        relatedId: {
            type: Schema.Types.ObjectId,
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
    }
);

MediaSchema.index({ relatedEntity: 1, relatedId: 1, createdAt: -1 });

export const Media = mongoose.models.Media || mongoose.model<IMedia>('Media', MediaSchema);


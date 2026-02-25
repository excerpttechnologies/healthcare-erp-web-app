import mongoose, { Schema, Document } from 'mongoose';

export interface IHomepageSlide extends Document {
    title: string;
    subtitle?: string;
    imageUrl: string;
    buttonText?: string;
    buttonLink?: string;
    order: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const HomepageSlideSchema = new Schema<IHomepageSlide>(
    {
        title: { type: String, required: true },
        subtitle: { type: String },
        imageUrl: { type: String, required: true },
        buttonText: { type: String },
        buttonLink: { type: String },
        order: { type: Number, default: 0 },
        isActive: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

HomepageSlideSchema.index({ isActive: 1, order: 1, createdAt: -1 });

export const HomepageSlide =
    mongoose.models.HomepageSlide ||
    mongoose.model<IHomepageSlide>('HomepageSlide', HomepageSlideSchema);


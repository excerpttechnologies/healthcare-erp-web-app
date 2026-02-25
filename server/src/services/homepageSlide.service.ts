import { HomepageSlide, IHomepageSlide } from '../models/homepageSlide.model';

interface CreateSlideParams {
    title: string;
    subtitle?: string;
    imageUrl: string;
    buttonText?: string;
    buttonLink?: string;
    order?: number;
    isActive?: boolean;
}

interface UpdateSlideParams extends Partial<CreateSlideParams> {}

export const getActiveSlides = async (): Promise<IHomepageSlide[]> => {
    return HomepageSlide.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
};

export const createSlide = async (payload: CreateSlideParams): Promise<IHomepageSlide> => {
    const slide = await HomepageSlide.create(payload);
    return slide;
};

export const updateSlide = async (
    id: string,
    payload: UpdateSlideParams
): Promise<IHomepageSlide | null> => {
    const slide = await HomepageSlide.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return slide;
};

export const deleteSlide = async (id: string): Promise<IHomepageSlide | null> => {
    const slide = await HomepageSlide.findByIdAndDelete(id);
    return slide;
};


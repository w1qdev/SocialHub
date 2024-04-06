import mongoose, { Schema, Document } from 'mongoose';

// Определение интерфейса для документа пользователя
export interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    avatar?: {
        // Аватар пользователя (необязательное поле)
        data: Buffer;
        contentType: string;
    };
    bio?: string; // Биография пользователя (необязательное поле)
    createdAt: Date;
    updatedAt: Date;
}

// Определение схемы пользователя
const UserSchema: Schema<UserDocument> = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: {
        data: { type: Buffer, required: false },
        contentType: { type: String, required: false },
    },
    bio: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Определение модели пользователя
const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export { UserSchema, UserModel };

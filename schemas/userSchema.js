import mongoose from 'mongoose';

const User = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    avatar: { type: String, required: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
})

export default mongoose.model('User', User);
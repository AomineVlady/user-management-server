const mongoose = require("mongoose");

const user = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    avatar: { type: String, required: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    updatedAt: {type: String, required: false},
})

const User = mongoose.model('User', user);
module.exports = User;
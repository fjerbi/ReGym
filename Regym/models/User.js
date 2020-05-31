const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    user_created_date: {
        type: Date,
        default: Date.now
    }, 
    enabled: {
        type: Boolean,
        default: false 
    }
});

module.exports = User = mongoose.model('user', UserSchema);
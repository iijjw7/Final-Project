const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// Define the User schema
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+$/.test(v); // Only English letters
            },
            message: 'First name can only contain English letters',
        },
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+$/.test(v); // Only English letters
            },
            message: 'Last name can only contain English letters',
        },
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email address',
        },
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z0-9]+$/.test(v); // Only English letters and numbers
            },
            message: 'Username can only contain English letters and numbers',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        validate: {
            validator: function (v) {
                // Must contain uppercase, lowercase, number, and special character
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        },
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
});

// Password hashing middleware
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);

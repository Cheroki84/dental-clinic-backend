const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    lastname: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Campo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    phone: {
        type: String
    },
    photo: {
        type: String
    },
    birthdate: {
        type: String
    },
    address: {
        type: String
    },
    token: {
        type: String
    }
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
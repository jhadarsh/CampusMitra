const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Room', 'PG', 'Hostel', 'Apartment'],  // Types of accommodations
    },
    location: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pinCode: {
            type: Number,
            required: true,
        },
    },
    price: {
        type: Number,
        required: true, // Monthly or per semester rent
    },
    amenities: {
        type: [String],  // List of amenities like Wi-Fi, food, laundry, etc.
    },
    contactInfo: {
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: false,
        },
    },
    availableSlots: {
        type: Number,
        required: true, // Number of available rooms or slots
    },
    images: {
        type: [String], // Array of image URLs for the accommodation
    },
    reviews: [{
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            required: false,
        },
        reviewerName: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        }
    }],
    addedDate: {
        type: Date,
        default: Date.now,
    }
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;

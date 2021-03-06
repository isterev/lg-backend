"use strict";

const mongoose = require('mongoose');

// Define the lunch schema

const LunchSchema  = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    members: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});
LunchSchema.set('versionKey', false);
LunchSchema.set('timestamps', true);

// Export the lunch model
module.exports = mongoose.model('Lunch', LunchSchema);
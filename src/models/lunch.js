"use strict";

const mongoose = require('mongoose');

// Define the movie schema

const LunchSchema  = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    begintime: {
        type: String,
        required: true
    },
    endtime: {
        type: String,
        required: true
    },
/*    members: {
        type: Number,
        required: true
    },*/
    description: {
        type: String,
        required: true
    }
});
LunchSchema.set('versionKey', false);
LunchSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('LunchGroup', LunchSchema);
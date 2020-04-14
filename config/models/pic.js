const mongoose = require('mongoose');

const picSchema = mongoose.Schema({
    tags: {
        type: String
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('Pic', picSchema);
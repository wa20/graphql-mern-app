const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
 

    // when we create a new collection it will get assigned an id, and this id will relate to another model. we define this with the ref 'client' which tells it to assign it to client model.
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongoose.model('Project', ProjectSchema)
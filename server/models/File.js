const {model, Schema, ObjectId} = require("mongoose");

const File = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    accessLink: {type: String},
    size: {type: Number, default: 0},
    path: {type: String, default: ''},
    user: {type: Object, ref: 'User'},
    parent: {type: ObjectId, ref: 'File'},
    child: {type: ObjectId, ref: 'File'},
})

module.exports = model("File", File);
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SmileSchema = new Schema({
    smilevalue: Number
});

//mongoose.model('Smelly', SmileSchema);
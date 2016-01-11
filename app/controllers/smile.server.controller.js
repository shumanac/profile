var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SmileSchema = new Schema({
    smilevalue: String
});

mongoose.model('Smelly', SmileSchema);


var Smile = require('mongoose').model('Smelly');



exports.savethedata = function (req, res, next) {
    var smile = new Smile(req.body);

    smile.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json(smile);

        }
    });

    //console.log('gffdgfd');
};



exports.list = function (req, res, next) {

    Smile.find({}, function (err, smile) {
        if (err) {
            return next(err);
        } else {

            res.json(smile)

        }
    });
    //console.log('gffdgfd');

};
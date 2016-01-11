exports.render = function (req, res) {
    res.render('index', {
        title: 'voting'
    });
};

exports.renderresult = function (req, res) {
    res.render('votingresult', {
        title: 'result'
    });
};
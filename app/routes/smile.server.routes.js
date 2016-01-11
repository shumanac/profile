  var smiles = require('../controllers/smile.server.controller');
  var index = require('../controllers/index.server.controller');

  module.exports = function (app) {


      //app.post('/savedata', smile.savethedata);

      app.route('/savedata').post(smiles.savethedata).get(smiles.list);
  };
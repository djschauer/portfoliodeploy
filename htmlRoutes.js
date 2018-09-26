var path = require('path');

var html = {
    getHome: function(app) {
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, '/index.html'));
            console.log("serving up index")
        });
    }
};

module.exports = html;
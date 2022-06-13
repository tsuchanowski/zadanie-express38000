const User = require('../models/User');


function postList(df) {
    User.find().lean().exec(function (err, users) {

        if (err) {
            df(err)
        } else {
            df(null, users)
        }
    })
};

module.exports = {
    list: postList
}
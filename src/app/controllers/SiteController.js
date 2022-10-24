const Course = require('../models/Course');
const { mutipleMongooseToOBject } = require('../../until/mongoose');
class SiteController {
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToOBject(courses),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const Course = require('../models/Course');
const { mutipleMongooseToOBject } = require('../../until/mongoose');
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToOBject(courses),
                });
            })
            .catch(next);
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToOBject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();

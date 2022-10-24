const Course = require('../models/Course');
const { mutipleMongooseToOBject } = require('../../until/mongoose');

class CourseController {
    // [GET] courses/:slug
    detail(req, res, next) {
        // res.send('asasd - ' + req.params.slug); // day la dong test
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                course = course.toObject(course);
                res.render('course/detail', { course });
            })
            .catch(next);
    }
    // [GET] courses/create
    create(req, res, next) {
        res.render('course/create');
    }
    //[POST] courses/store
    store(req, res, next) {
        let formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => {
            res.redirect('/courses/manh');
        });
    }
    // [GET] courses/:id/editcourses
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                course = course.toObject(course);
                res.render('course/edit', { course });
            })
            .catch(next);
    }

    //[PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body) // req.body laf ObJect Muoons chinh sua
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    delete(req, res, next){
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController();
//class thì phải có new

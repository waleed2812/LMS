const teacherController =  require('../controllers/teacher.controller'),
    passport = require('../../../../config/passport');

module.exports = (app, version) => {
    // Assignment 3

    app.get(version + '/teacher',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.teacher
    );

    app.get(version + '/teacher/viewattquiz',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.viewattquiz
    );

    app.get(version + '/teacher/quiz/:id',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.quiz
    );

    app.get(version + '/teacher/viewattassign',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.viewattassign
    );

    app.get(version + '/teacher/assign/:id',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.assignment
    );

    app.get(version + '/teacher/materials',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.materials
    );

    app.post(version + '/teacher/addquiz',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.addquiz
    );

    app.post(version + '/teacher/addassign',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.addassign
    );

    app.post(version + '/teacher/addmat',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.addmat
    );

    app.post(version + '/teacher/addmarks',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.addmarks
    );

    app.put(version + '/teacher/marks/:id',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.marks
    );

    app.delete(version + '/teacher/quiz/:id',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.deleteQuiz
    );

    app.delete(version + '/teacher/assignment/:id',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.deleteAssignment
    );

    app.delete(version + '/teacher/material/:id',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.deleteMaterial
    );

    app.delete(version + '/teacher/marks/:id',
        passport.isAuthenticated,
        passport.isAuthorized('teacher'),
        teacherController.deleteMarks
    );

}
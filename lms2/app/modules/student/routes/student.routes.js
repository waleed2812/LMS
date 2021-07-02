const studentController = require('../controllers/student.controller'),
    passport = require('../../../../config/passport');

module.exports = (app, version) => {
    app.get(version + '/student',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.getstudentDashboard
    );

    app.get(version + '/student/viewquiz',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.viewQuiz
    );

    app.get(version + '/student/viewassignment',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.viewAssignment
    );

    app.get(version + '/student/material',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.getMaterials
    );

    app.get(version + '/student/material/:id',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.getMaterial
    );

    app.get(version + '/student/result',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.getResults
    );

    app.get(version + '/student/result/:subid',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.getResult
    );

    app.post(version + '/student/attemptQuiz',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.attemptQuiz
    );

    app.post(version + '/student/submitassignment',
        passport.isAuthenticated,
        passport.isAuthorized('student'),
        studentController.submitAssignment
    );

    
}
const winston = require('../../../../config/winston'),
    mongoose = require('mongoose'),
    quizResModal = mongoose.model('quizRes'),
    ClassModal = mongoose.model('Class'),
    QuizModal = mongoose.model('quiz'),
    resultModal = mongoose.model('result'),
    AssignmentModal = mongoose.model('assignment'),
    MaterialModal = mongoose.model('material');

// Assignment 3

const getstudentDashboard = async function(req, res, next) {
    
    try {
        const classes = await ClassModal.find({students: req.user._id}).select('-students')

        return res.json({
            success: 1,
            message: "getstudentDashboard",
            data: {
                classes: classes,
            }
        })
    } catch(error) {
        winston.error(err);
        res.redirect('/error');
    }
}

const viewQuiz = async function(req, res, next) {
    try {

        const classes = await ClassModal.find({students: req.user._id}).select('id')

        const quizzes = await QuizModal.find({class: classes}).select('-answers')

        return res.json({
            success: 1,
            message: "viewQuiz",
            data: {
                quizzes: quizzes
            }
        })
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

const viewAssignment = async function(req, res, next) {
    try {

        const classes = await ClassModal.find({students: req.user._id}).select('id')

        const assignments = await AssignmentModal.find({class: classes}).select('-submissions')

        return res.json({
            success: 1,
            message: "viewAssignment",
            data: {
                assignments: assignments
            }
        })
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

const getMaterials = async function(req, res, next) {
    try {

        const classes = await ClassModal.find({students: req.user._id}).select('id')

        const materials = await MaterialModal.find({class: classes})

        return res.json({
            success: 1,
            message: "getMaterials",
            data: {
                materials: materials
            }
        })
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

const getMaterial = async function(req, res, next) {
    try {

        const material = await MaterialModal.findOne({_id: req.params.id})

        return res.json({
            success: 1,
            message: "getMaterial",
            data: {
                material: material
            }
        })
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

const getResults = async function(req, res, next) {
    try {

        const results = await resultModal.find({student: req.user._id}).select('marks');

        return res.json({
            success: 1,
            message: "getResults",
            data: {
                results: results
            }
        })
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

const getResult = async function(req, res, next) {
    try {

        const result = await resultModal.find({_id: req.params.id}).select('marks');

        return res.json({
            success: 1,
            message: "getResult",
            data: {
                result: result
            }
        })
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

const attemptQuiz = async function(req, res, next) {
    try {
        
        new quizResModal({
            "quiz": req.body.quiz,
            "student": req.body.student,
            "answers": req.body.answers,
        }).save((err) => {
            if (err) {
                winston.error(err);
                res.redirect('/error');
                return;
            } else {
                return res.json({
                    success: 1,
                    message: 'Quiz Attempted successfully.',
                    data: {}
                });
            }
        });
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

const submitAssignment = async function(req, res, next) {
    try {
        
        await AssignmentModal.updateOne({ _id: req.params.id }, {
            $push: {
                submissions: {
                    user: req.user._id,
                    path: '/uploads/submission/' + req.file.filename
                }
            }
        });
    
        return res.json({
            success: 1,
            message: 'Assignment Submitted.',
            data: {
                fileUrl: '/uploads/submission/' + req.file.filename,
            }
        });
    
    }
    catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
}

module.exports = {
    getstudentDashboard,
    attemptQuiz,
    viewAssignment,
    getMaterials,
    getMaterial,
    getResults,
    getResult,
    viewQuiz,
    submitAssignment
}
const winston = require('../../../../config/winston'),
    mongoose = require('mongoose'),
    quizResModal = mongoose.model('quizRes'),
    ClassModal = mongoose.model('Class'),
    QuizModal = mongoose.model('quiz'),
    resultModal = mongoose.model('result'),
    AssignmentModal = mongoose.model('assignment'),
    MaterialModal = mongoose.model('material');

// Assignment 3
const teacher = async function(req, res, next) {
    try{
        
        const classes = await ClassModal.find({teacher: req.user._id})

        return res.json({
            success: 1,
            message: "teacher",
            data: {
                classes: classes,
            }
        })

    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const viewattquiz = async function(req, res, next) {
    try{

        const classes = await ClassModal.find({teacher: req.user._id}).select('_id')

        const quizzes = await QuizModal.find({class: classes}).select('_id')

        const attquiz = await quizResModal.find({quiz: quizzes})

        return res.json({
            status: 0,
            message: 'viewattquiz',
            data: {
                attquiz: attquiz
            }
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const quiz = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'quiz',
            data: {
                quiz: await QuizModal.find({_id: req.params.id})
            }
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const viewattassign = async function(req, res, next) {
    try{

        const assign = await AssignmentModal.find({teacher: req.user._id})

        return res.json({
            status: 0,
            message: 'viewattassign',
            data: {
                assign: assign
            }
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}

const assignment = async function(req, res, next) {
    
    try{

        const assign = await AssignmentModal.findOne({_id: req.params.id})
        return res.json({
            status: 0,
            message: 'assignment',
            data: {
                assign: assign
            }
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const materials = async function(req, res, next) {
    
    try{

        return res.json({
            status: 0,
            message: 'materials',
            data: {
                materials: await MaterialModal.find({teacher: req.user._id})
            }
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const addquiz = async function(req, res, next) {
    try{

        new QuizModal(req.body).save((err) => {
            if (err) {
                winston.error(err);
                res.redirect('/error');
            } else {
                return res.json({
                    success: 1,
                    message: 'Quiz created successfully.',
                    data: {}
                });
            }
        });

    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const addassign = async function(req, res, next) {
    try{
        new AssModal(req.body).save((err) => {
            if (err) {
                winston.error(err);
                res.redirect('/error');
            } else {
                return res.json({
                    success: 1,
                    message: 'Assignment created successfully.',
                    data: {}
                });
            }
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const addmat = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'addmat',
            data: {}
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const addmarks = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'addmarks',
            data: {}
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const marks = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'marks',
            data: {}
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const deleteQuiz = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'deleteQuiz',
            data: {}
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const deleteAssignment = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'deleteAssignment',
            data: {}
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const deleteMaterial = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'deleteMaterial',
            data: {}
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}
const deleteMarks = async function(req, res, next) {
    try{
        return res.json({
            status: 0,
            message: 'deleteMarks',
            data: {}
        });
    } catch(error) {
        winston.error(error);
        res.redirect('/error');
    }
}


module.exports = {
    teacher,
    viewattquiz,
    quiz,
    viewattassign,
    assignment,
    materials,
    addquiz,
    addassign,
    addmat,
    addmarks,
    marks,
    deleteQuiz,
    deleteAssignment,
    deleteMaterial,
    deleteMarks,

}
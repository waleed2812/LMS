const multer = require('multer');


let upload = () => {
    return multer({
        storage: multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, __dirname + '/../public/uploads');
            },
            filename: (req, file, callback) => {
                let fileName = Date.now() + '-' + file.originalname.toLowerCase().split(' ').join('-');
                callback(null, fileName);
            }
        }),
        fileFilter: (req, file, callback) => {
            if (file.mimetype === 'image/png' || file.mimetype === 'image/PNG' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
                callback(null, true);
            } else {
                // callback(null, false);
                return callback(new Error('Allowed only .png, jpg and jpeg images.'));
            }
        }
    });
};

let uploadAssignment = () => {
    return multer({
        storage: multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, __dirname + '/../public/uploads/assignments');
            },
            filename: (req, file, callback) => {
                let fileName = Date.now() + '-' + file.originalname.toLowerCase().split(' ').join('-');
                callback(null, fileName);
            }
        }),
        fileFilter: (req, file, callback) => {
            if (file) { // file type check
                callback(null, true);
            } else {
                // callback(null, false);
                return callback(new Error('Allowed only .docx and .pdf files.'));
            }
        }
    });
};


let createAssignment = () => {
    return multer({
        storage: multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, __dirname + '/../public/uploads/assignments');
            },
            filename: (req, file, callback) => {
                let fileName = Date.now() + '-' + file.originalname.toLowerCase().split(' ').join('-');
                callback(null, fileName);
            }
        }),
        fileFilter: (req, file, callback) => {
            if (file) { // file type check
                callback(null, true);
            } else {
                // callback(null, false);
                return callback(new Error('Allowed only .docx and .pdf files.'));
            }
        }
    });
};

module.exports = {
    upload,
    uploadAssignment,
    createAssignment
};

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const generateUniqueToken = () => {
    return crypto.randomBytes(16).toString('hex');
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadsFolder = 'uploads';
        if (!fs.existsSync(uploadsFolder)) {
            fs.mkdirSync(uploadsFolder);
        }
        cb(null, uploadsFolder);
    },
    filename: (req, file, cb) => {
        const uniqueToken = generateUniqueToken();
        const fileExtension = path.extname(file.originalname);
        cb(null, `${uniqueToken}${fileExtension}`);
    },
});

const upload = multer({ storage });

module.exports = upload;

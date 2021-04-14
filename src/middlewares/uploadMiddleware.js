const util = require("util");
const path = require("path");
const multer = require("multer");

const getExt = (mimeType) => {
    switch(mimeType){
        case "image/png":
            return ".png";
        default:
            return ".jpg";
    }
}

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(`${__dirname}/../../upload`));
    },
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
    }
})

let uploadFiles = multer({ storage: storage }).array("multi-files", 10);
let uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;

// use multer module to initialize middleware and util.promisify() 
// to make the exported middleware object can be used with async-await
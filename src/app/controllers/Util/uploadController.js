const upload = require("../../middlewares/uploadMiddleware");

const multiUpload = async(req, res) => {
    try {
        await upload(req, res);
        console.log(req.files);

        if(req.files.length <= 0) {
            return res.send(`You must select atleast 1 file.`);
        }

        return res.send(`Files has been uploaded`);
    } catch (err) {
        console.log(err);

        if(err.code === "LIMIT_UNEXPECTED_FILE") {
            return res.send("Too many files to upload.");
        }
        return res.send(`Error when trying upload many files: ${error}`);
    }
};

module.exports = {
    multiUpload: multiUpload
};
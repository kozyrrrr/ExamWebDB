const { addName } = require('../services/service')

const postName = async (req, res, next) => {
    const {userName} = req.body;
    const modelPath = req.file.path;
    try {
        await addNamel(userName, modelPath);
        res.sendStatus(201);
        next();
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}


module.exports = {
    postName
}
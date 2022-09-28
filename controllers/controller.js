import Service from '../services/service.js'

const createNote = async (req, res, next) => {
    try {
    console.log(req.body)
    const Note = {  
        firstname: req.body.firstInput,
        lastname: req.body.lastInput
    }
    await Service.addNote(Note);
    res.send(JSON.stringify(Note))
    next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
    
}

const sendNote = async (req, res, next) => {
	try {
			const data = await Service.getNote()
			res.send(data)
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

export default {
	createNote,
    sendNote
}

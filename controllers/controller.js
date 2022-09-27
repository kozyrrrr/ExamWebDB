import Service from '../services/service.js'

const createNote = async (req, res, next) => {
    try {
    console.log(req.body)
    const Note = {  
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    
    console.log(Note);
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
			const data = await Service.sendNote()
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

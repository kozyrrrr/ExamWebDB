import Service from '../service/service.js'

const createNote= async (req, res, next) => {
    try {
    const Note = {  
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    
    await Service.addNote(Note);
    res.send(`<h1>Данные успешно отправлены</h1>
    <a href='/index.html'>Back to main page</a>   Данные:` + JSON.stringify(Note))
    next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
    
}

export default {
	createNote
}

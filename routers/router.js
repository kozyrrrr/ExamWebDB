import { Router } from "express"
import path from "path"
import Controller from "../controllers/controller.js"


const __dirname = path.resolve(path.dirname(''))
const router = Router()

router.post('/add', Controller.createNote);
router.get('/add', Controller.sendNote);

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


export default router
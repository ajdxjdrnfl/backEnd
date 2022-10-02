import express from 'express'
import {getList, delList, addList} from '../controller/todo.js'
const router = express.Router();

router.get('/:id/getList', getList);
router.delete('/:id/delList', delList);
router.post('/:id/addList', addList);

export default router;
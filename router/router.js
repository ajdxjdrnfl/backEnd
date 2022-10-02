import express from 'express'
import {getList, delList, addList, makeList} from '../controller/todo.js'
const router = express.Router();

router.get('/:id/getList', getList);
router.delete('/:id/delList', delList);
router.post('/:id/addList', addList);
router.post('/:id/makeList', makeList);

export default router;
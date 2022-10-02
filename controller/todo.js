export const getList = (req, res, next) => {
    const {id} = req.params;
    console.log(id);
    // id와 같은 id를 가진 유저의 Todolist를 DB에서 가져옵니다.
    res.json(list);
}

export const delList = (req, res, next) => {
    const {id} = req.params;
    console.log(id);
}

export const addList = (req, res, next) => {
    const {id} = req.params;
    console.log(id);
    // post로 받은 새로운 내용들을 DB에 추가합니다.
    res.status(200).json({success:true});
}

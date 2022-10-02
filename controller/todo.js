export const getList = (req, res, next) => {
    const {id} = req.params;
  
    // id와 같은 id를 가진 유저의 Todolist를 DB에서 가져옵니다.
    res.json(list);
}

export const delList = (req, res, next) => {
    const {id} = req.params;
    // DB에서 id에 맞는 Todolist를 삭제해줍니다.
    res.status(200).json({success:true});
}

export const addList = (req, res, next) => {
    const {id} = req.params;
    // post로 받은 새로운 내용들을 DB에 추가합니다.
    res.status(200).json({success:true});
}

export const makeList = (req, res, next) => {
    const {id} = req.params;
    // 새로운 Todolist를 생성해주고 DB에 저장합니다.
    res.status(200).json({success:true});
}
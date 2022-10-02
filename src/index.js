import express from 'express'
import todo  from'../router/router.js'
const app = express();
const port = 3000;

const loggingMiddleware = (req, res, next) => {
    console.log(req);
    next();
}
app.use(loggingMiddleware);

app.use('/', todo);
app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.listen(port);
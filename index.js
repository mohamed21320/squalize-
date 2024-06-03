import express from 'express'
import postRouter from './src/posts/post.routes.js'
import connection from './DB/connectionDB.js';
import userRouter from './src/users/user.routes.js';
import commentRouter from './src/comments/comment.routes.js';




const app = express()
const port = process.env.PORT ||3000

app.use(express.json())
app.use("/posts",postRouter)
app.use("/users",userRouter)
app.use("/comments",commentRouter)
connection()

app.get('/', (req, res) => {
  return  res.status(201).send('helllo')
})

app.get('*', (req, res) => {
    res.send('404 Not Founded')
})
app.listen(port, () => console.log(`server is connected successfully`))
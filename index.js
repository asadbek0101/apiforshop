import express from 'express'
import bodyParser from "body-parser";
import userRouter from './routes/users.js'
import  cors from 'cors'

const app = express()
const PORT = 5000
app.use(cors())
app.use(bodyParser.json())
app.use('/', userRouter)
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`)
)


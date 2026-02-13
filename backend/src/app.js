import express from 'express'
import cors from 'cors'
import AuthRouter from "./routes/auth.routes.js"
import UserRouter from "./routes/user.routes.js"
import ProductRouter from "./routes/product.routes.js"
import OrderRouter from "./routes/order.routes.js"
import { connectMongo } from './config/mongo.config.js'


const app = express()
app.use(express.json())

app.use(cors())


app.use('/auth', AuthRouter)
app.use('/users',UserRouter)
app.use('/products',ProductRouter)
app.use('/orders',OrderRouter)
// app.use("/", (req, res)=>{
//     res.send("hello world")
// })


async function startServer(){
    await connectMongo()
    app.listen(3000,()=>{
        console.log("server started");
        
    })
}

startServer()
import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import { router } from "./routes"
import { AppError } from "./utils/AppError"

const PORT = 3333
const app = express()

app.use(express.json())
app.use(router)

app.use((error: any, request: Request, response: Response, _:NextFunction) => {
    if(error instanceof AppError){
        response.status(error.statuscode).json({message: error.message})
    }
    response.json({message: error.message})
})

app.listen(PORT, ()=>console.log(`Server is running in port ${PORT}`))

class AppError {
    message: string
    statuscode: number
    constructor(message: string, statusCode: number = 400){
        this.message = message
        this.statuscode = statusCode
    }
}

export { AppError}
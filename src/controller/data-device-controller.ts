import { prisma } from "@/prisma"
import { AppError } from "@/utils/AppError"
import { Request, response, Response } from "express"

class DataDevice {
    async index(request: Request, response:Response){
        const data = await prisma.data_devices.findMany()
        response.json(data)
    }
    async show(request: Request, response:Response){
        const {device_id} = request.params
        const data = await prisma.data_devices.findMany({where:{devicesId:device_id}})
        response.json(data)
    }
    async remove(request: Request, response:Response){

        const {id} = request.params
        const data = await prisma.data_devices.findFirst({where:{id}})
        if (!data){
            throw new AppError("Data is not found")
        }
        await prisma.data_devices.delete({where:{id}})
        response.json("Data is deleted")
    }
}

export {DataDevice}
import { Request, Response } from "express"
import { prisma } from "@/prisma"
import { AppError } from "@/utils/AppError"

class Device {
    async index(request: Request, response:Response){
        const device = await prisma.devices.findMany()

        response.json(device)
    }
    async create(request: Request, response:Response){
        const {name, description} = request.body
        const findDevice = await prisma.devices.findUnique({where:{name}})

        if(findDevice){
            throw new AppError("Device is already registered",401)
        }

        const device = await prisma.devices.create({
            data: {name, description}
        })

        response.json(device)
    }

    async show(request: Request, response:Response){
        const {id} = request.params
        const device = await prisma.devices.findFirst({where:{id}})

        if(!device){
            throw new AppError("Device is not found")
        }

        response.json(device)
    }

    async update(request: Request, response:Response){
        const {name, description} = request.body
        const {id} = request.params

        const findDevice = await prisma.devices.findFirst({where:{id}})

        if(!findDevice){
            throw new AppError("Device is not found",401)
        }

        if (name == findDevice.name && description == findDevice.description){
            throw new AppError("Device is already updated")
        }

        const updated = await prisma.devices.update({where:{id}, data: {name, description}})

        response.json(updated)
    }

    async remove(request: Request, response:Response){
        const {id} = request.params
        const device = await prisma.devices.delete({where:{id}})

        if(!device){
            throw new AppError("Device is not found")
        }

        response.json({message: "Device is deleted" })
    }
}

export {Device}
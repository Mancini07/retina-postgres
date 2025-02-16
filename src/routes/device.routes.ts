import { Device } from "@/controller/device-controller";
import { Router } from "express";

const deviceRoutes = Router()
const controller = new Device()

deviceRoutes.get("/", controller.index)
deviceRoutes.post("/", controller.create)
deviceRoutes.get("/:id", controller.show)
deviceRoutes.put("/:id", controller.update)
deviceRoutes.delete("/:id", controller.remove)

export {deviceRoutes}
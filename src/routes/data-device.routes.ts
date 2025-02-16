import { DataDevice } from "@/controller/data-device-controller";
import { Router } from "express";

const dataDeviceRoutes = Router()
const controller = new DataDevice

dataDeviceRoutes.get("/", controller.index)
dataDeviceRoutes.get("/:device_id", controller.show)
dataDeviceRoutes.delete("/:id", controller.remove)

export {dataDeviceRoutes}
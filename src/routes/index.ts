import { Router } from "express";
import { deviceRoutes } from "./device.routes";
import { dataDeviceRoutes } from "./data-device.routes";

const router = Router()


router.use("/device", deviceRoutes )
router.use("/data-device", dataDeviceRoutes)

export {router}
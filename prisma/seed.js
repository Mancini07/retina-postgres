"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("@/prisma");
async function seed() {
    await prisma_1.prisma.data_devices.createMany({
        data: [
            {
                measures: "FFT",
                axle: "x",
                value: 150.5,
                devicesId: "b073b706-6b64-4d30-ae1e-472b51c6eef0"
            },
            {
                measures: "FFT",
                axle: "y",
                value: 180.5,
                devicesId: "b073b706-6b64-4d30-ae1e-472b51c6eef0"
            },
            {
                measures: "FFT",
                axle: "Z",
                value: 160.5,
                devicesId: "b073b706-6b64-4d30-ae1e-472b51c6eef0"
            },
        ]
    });
}
seed().then(() => {
    console.log("Seed is finish!");
    prisma_1.prisma.$disconnect();
});

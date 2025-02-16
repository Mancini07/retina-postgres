import { prisma } from "@/prisma";


async function seed (){
    await prisma.data_devices.createMany({
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
    })
}

seed().then(()=>{
    console.log("Seed is finish!")
    prisma.$disconnect()
}

)
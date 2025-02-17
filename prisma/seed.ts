import { prisma } from "../src/prisma.ts"


async function seed (){
    await prisma.data_devices.createMany({
        data: [
            {
                measures: "FFT",
                axle: "x",
                value: 150.5,
                devicesId: "73456bf1-01db-4172-b474-5ecbeb559f7b"
            },
            {
                measures: "FFT",
                axle: "y",
                value: 180.5,
                devicesId: "73456bf1-01db-4172-b474-5ecbeb559f7b"
            },
            {
                measures: "FFT",
                axle: "Z",
                value: 160.5,
                devicesId: "73456bf1-01db-4172-b474-5ecbeb559f7b"
            },
        ]
    })
}

seed().then(()=>{
    console.log("Seed is finish!")
    prisma.$disconnect()
}

)
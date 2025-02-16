-- CreateTable
CREATE TABLE "data_devices" (
    "id" TEXT NOT NULL,
    "measures" TEXT NOT NULL,
    "axle" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "devices_id" TEXT NOT NULL,

    CONSTRAINT "data_devices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "data_devices" ADD CONSTRAINT "data_devices_devices_id_fkey" FOREIGN KEY ("devices_id") REFERENCES "devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

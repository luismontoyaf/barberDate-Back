const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const ScheduleScheme = new mongoose.Schema(
    {
        barberName: {
            type:String,
        },
        hour:{
            start:{
                type:String
            },
            end:{
                type:String
            }
        },
        clientName: {
            type:String,
            unique: true
        },
        clientNumber: {
            type:String,
            unique: true
        },
        clientEmail: {
            type:String,
            unique: true
        },
        typeService: {
            type:String
        },
        barberId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true, //Crea las columnas createdAt y updatedAt
        versionKey: false,
    }
);

ScheduleScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("schedule", ScheduleScheme)
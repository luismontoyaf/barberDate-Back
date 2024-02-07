const mongoose = require("mongoose")

const AvailableHourScheme = new mongoose.Schema(
    {
        date: {
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
        range: {
            type:Number,
        },
        availableHour: {
            type: Boolean
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

module.exports = mongoose.model("availableHour", AvailableHourScheme)
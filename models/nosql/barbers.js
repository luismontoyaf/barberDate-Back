const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const BarbersScheme = new mongoose.Schema(
    {
        name: {
            type:String,
        },
        lastName:{
            type:String,
        },
        documentType: {
            type:String
        },
        documentNumber: {
            type:String,
            unique: true
        },
        age: {
            type: Number,
        },
        email: {
            type:String,
            unique: true
        },
        password: {
            type:String
        },
        phone: {
            type:String
        },
        role: {
            type: ["user","admin"],
            default: "user",
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

BarbersScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("barbers", BarbersScheme);
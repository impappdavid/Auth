import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required,
        unique,
    },
    password:{
        type:String,
        required,
    },
    isMfaActive: {
        type: Boolean,
        required: false
    },
    twoFactorSecret: {
        type: String,
    }
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)
export default User
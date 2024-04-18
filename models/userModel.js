import mongoose from "mongoose";
import crypto from "crypto";
import validator from "validator";

const userSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validator.isEmail, "Please Enter a valid Email"]
        },
        password: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            default: "Hello World"
        },
        contact: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ["member", "admin"],
            default: "member"
        },
        passwordResetToken: String,
        passwordResetExpires: Date
    },
    { timestamps: true }
);

userSchema.index({
    fullName: "text",
    email: "text",
    id: "text"
}); // Create text index

//Generating password reset token with crypto
userSchema.methods.createPasswordResetToken = function () {
    let resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.passwordResetExpires = Date.now() + 15 * 60 * 1000;
    return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;

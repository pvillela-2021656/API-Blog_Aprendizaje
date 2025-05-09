import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name IS required."],
        maxLength: [25, "Name cannot exceed 25 characteres."]
    },
    surname:{
        type: String,
        required: [true, "Surname IS required."],
        maxLength: [25, "Surname cannot exceed 25 characteres."]
    },
    username:{
        type: String,
        required: [true, "username IS required."],
        unique: true
    },
    email:{
        type: String,
        required: [true, "Email IS required."],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Password IS required."],
    },
    role:{
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "VISITOR_ROLE"],
        default: "VISITOR_ROLE"
    },
    status:{
        type: Boolean,
        default: true,
    },
},
    {
        versionKey: false,
        timeStamps: true
    });

userSchema.methods.toJSON = function (){
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

export default model("User", userSchema);
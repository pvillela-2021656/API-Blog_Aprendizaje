import { Schema } from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is requiered"],
        maxLength: [25, "Name cannot exceed 25 characteres"]
    },
    surname:{
        type: String,
        required: [true, "Surname is requiered"],
        maxLength: [25, "Surname cannot exceed 25 characteres"]
    },
    username:{
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "Email is requiered"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Password is requiered"],
    },
    phone:{
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true,
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

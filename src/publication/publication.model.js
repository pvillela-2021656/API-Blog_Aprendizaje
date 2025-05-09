import { Schema, model } from 'mongoose';

const publicationSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title IS required."],
        maxLength: [50, "Title cannot exceed 50 characters."]
    },
    description: {
        type: String,
        required: [true, "Description IS required."],
        maxLength: [500, "Description cannot exceed 500 characters."]
    },
    course: {
        type: String,
        required: [true, "Course of this publication IS required."]
    },
    dateOfCreation: {
        type: Date,
        required: [true, "Date of creation IS required."],
    }
}, {
    versionKey: false,
    timestamps: true
});

publicationSchema.methods.toJSON = function () {
    const { __v, _id, ...publication } = this.toObject();
    publication.uid = _id;
    return publication;
}

export default model("Publication", publicationSchema);

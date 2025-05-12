import { Schema, model } from 'mongoose';

const commentarySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Author's name IS required."]
    },
    content: {
        type: String,
        required: [true, "Comment content IS required."],
        maxLength: [300, "Comment cannot exceed 300 characters."]
    },
    dateOfComment: {
        type: Date,
        default: Date.now,
        required: true
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: [true, "Associated publication ID IS required."]
    }
}, {
    versionKey: false,
    timestamps: true
});

commentarySchema.methods.toJSON = function () {
    const { __v, _id, ...comment } = this.toObject();
    comment.uid = _id;
    return comment;
}

export default model("Comment", commentarySchema);

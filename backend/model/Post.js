import mongoose from "mongoose";

const { model, Schema} = mongoose


const postSchema = new Schema({
    title: String,
    coffee: Number,
    text: String,
    rating: Number,
    created_at: Date,
    updated_at: Date
})

const Post = model('Post', postSchema)
export default Post
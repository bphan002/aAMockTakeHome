import mongoose from "mongoose";
const {Schema, model} = mongoose

const coffeeSchema = new Schema({
    name: String,
    year: Number,
    caffine_content: Number,
    caffine_percentage: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    }, 
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
})

const Coffee = model("Coffee", coffeeSchema)
export default Coffee
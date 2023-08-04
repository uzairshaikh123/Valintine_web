const mongoose = require('mongoose')


const BlogSchema  =  mongoose.Schema({

    title: { type: String, required: true },
    category:{type: String,required: true},
    image: { type: Array, required: true },
    city: { type: String, required: true },
    description: { type: Array, required: true },
    headings:{type: Array,required:false},
    subheadings:{type: Array,required:false},
    author: { type: String, required: true },
    date: { type: String, required: false },
    userID: { type: String, required: true },
    metatags: { type: Array, required:true},
    hashtags: { type: Array, required:true},
    comments: { type: Array, required:true}
})

const BlogModel = mongoose.model("blogs",BlogSchema)

module.exports = BlogModel
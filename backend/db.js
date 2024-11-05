const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://yadavrobin:n5BWXwgraFNK3EPB@cluster0.t4gbu.mongodb.net/todo")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema)
module.exports={
    todo:todo
}
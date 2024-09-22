const TodoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req,res)=>
{
    const {email} = req.body;
    const toDos = await TodoModel.find({email});
    res.send(toDos);
};

module.exports.saveToDo = async(req,res)=>
{
    const {toDo,email} = req.body;
    TodoModel.create({toDo,email}).then((data)=>{
        console.log("saved");
        res.status(201).send(data);
    }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Someting went wrong"});
    });
};

module.exports.deleteToDo = async(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete(id).then(()=>{
        console.log("Deleted...");
        res.send("Deleted...");
    }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Someting went wrong"});
    });
};


const User = require("../models/users");


async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res){
    const id = req.params.id;
    const user = await User.findById(id);
    return res.json(user);
}

async function handleCreateUser(req,res){
    const body = req.body;
    console.log(body)
    await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    });
    return res.status(201).json({msg:'success'});
}

async function handleUpdateUserById(req,res){
    const body = req.body;
    const id = req.params.id;
    await users.findByIdandUpdate(id, body);
    return res.json({msg:'success'});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({msg:'success'});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUserById,
    handleDeleteUserById,
};
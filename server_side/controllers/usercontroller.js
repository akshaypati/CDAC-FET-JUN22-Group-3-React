const {response, request} = require('express');
const { users } = require('../models/usermodel.js');
const { roles } = require('../models/rolemodel.js');
const db = require('../models');
const { sequelize } = require('../models');




const User = db.users
const Role = db.roles

//creating person

const addPerson = async  (req,res) => {

    let roleInfo = {
        role:req.body.role
    }

    const roleData = await Role.create(roleInfo);

    if(roleData && roleData.role){
        
            let userInfo = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            age:req.body.age,
            gender:req.body.gender,
            contact:req.body.contact,
            address:req.body.address,
            profession:req.body.profession,
            role_id:roleData.role_id
          
        }

        const userData = await User.create(userInfo);

        res.status(200).send(userData)

    }


    
}

module.exports = {
    addPerson
}
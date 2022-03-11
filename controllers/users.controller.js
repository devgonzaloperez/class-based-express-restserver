const {response} = require('express');

const usersGet = (req, res = response) =>{
    res.json({
        msg: "Se ha realizado una petición GET.",
        name: req.query.name //Obtengo el name de una query (no olvidar modificar la URL).
    })
}

const usersPut = (req, res = response) =>{
    res.json({
        msg: "Se ha realizado una petición PUT.",
        id: req.params.id //Obtengo el ID de los parámetros (no olvidar modificar la URL).
    })
}

const usersPost = (req, res = response) =>{
    res.json({
        msg: "Se ha realizado una petición POST.",
        user: req.body //Obtengo el user del body.
    })
    console.log(req.body)
}

const usersDelete = (req, res = response) =>{
    res.json({msg: "Se ha realizado una petición DELETE."})
}

const usersPatch = (req, res = response) =>{
    res.json({msg: "Se ha realizado una petición PATCH."})
}

module.exports = {usersGet, usersPut, usersPost, usersDelete, usersPatch};
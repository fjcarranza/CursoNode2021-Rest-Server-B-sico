const {response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario=require('../model/usuario');
const { validationResult } = require('express-validator');


const usuariosGet = (req, res=response) => {
    res.status(200).json({
        ok: true,
        msg: "get bueno controlador"
    });
}


const usuariosPut=(req, res=response) => {
    //const id=req.params.id;
    const{id, nn}=req.params;
    res.status(200).json({
        msg: "put API",
        id, 
        nn

    });
}


const usuariosPost=async (req, res=response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    const {nombre, correo, password, rol}=req.body;
    const usuario=new Usuario({nombre, correo, password, rol});
    
//  Verificar si el Correo ya existe
    const existeEmail=await Usuario.findOne({correo});
    if (existeEmail){
        return res.status(400).json({
            msg:"Ya esta registrado el correo",
            correo
        })
    }
// npm i express-validator

//  Encriptar la contraseña  para esto instalar 
//  npm i bcryptjs

    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password, salt);

//  Guardar en la DB
    await usuario.save();
    res.status(200).json({
        msg: "post API",
        usuario
    });

}

const usuariosDelete=(req, res=response) => {
    const{id}=req.params;
    res.status(200).json({
        ok: true,
        msg: "delete API",
        id
    });
}
const usuariosPatch=(req, res=response) => {
    res.status(200).json({
        ok: true,
        msg: "patch API"
    });
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}
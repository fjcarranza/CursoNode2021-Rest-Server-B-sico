const {response } = require('express');


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


const usuariosPost=(req, res=response) => {
    const {nombre, edad}=req.body;
    res.status(200).json({
        msg: "post API",
        nombre,
        edad
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
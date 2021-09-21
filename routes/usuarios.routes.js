
const { Router } = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch
    }=require('../controllers/usuarios.controllers')
const router = Router();

router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/:id/:nn", usuariosPut);
router.patch("/",usuariosPatch);
router.delete("/:id", usuariosDelete);


module.exports=router
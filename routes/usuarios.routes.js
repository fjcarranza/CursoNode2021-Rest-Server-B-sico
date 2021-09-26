
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch
    }=require('../controllers/usuarios.controllers')
const router = Router();

router.get("/", usuariosGet);
router.post("/", [
    check('correo', 'El correo no es correcto').isEmail(),
], usuariosPost);
router.put("/:id/:nn", usuariosPut);
router.patch("/",usuariosPatch);
router.delete("/:id", usuariosDelete);


module.exports=router
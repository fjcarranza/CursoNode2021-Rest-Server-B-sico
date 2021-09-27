
const { Router } = require('express');
const { check } = require('express-validator');

const {validarCampos} =require('../middlewares/validar-campos');

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch
    }=require('../controllers/usuarios.controllers')
const router = Router();

router.get("/", usuariosGet);
router.post("/", [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('password', 'El password debe de ser de mas de 6 digitos').isLength({min: 6}),
    check('correo', 'El correo no es correcto').isEmail(),
    check('rol', 'No es un rol Valido').isIn(['ADMIN_ROL', 'USER_ROLE']),
    validarCampos
], usuariosPost);
router.put("/:id/:nn", usuariosPut);
router.patch("/",usuariosPatch);
router.delete("/:id", usuariosDelete);


module.exports=router
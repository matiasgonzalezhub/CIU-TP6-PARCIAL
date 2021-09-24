let inicio_click = document.getElementById("btn_ingresar");

let valoresAceptadosUsuario = /^[0-9]+$/;

let usuario = document.getElementById("txb_usuario");
let contraseña = document.getElementById("txb_contraseña");

inicio_click.onclick = function () {
  validarIngreso(usuario.value, contraseña.value);
};

function validarIngreso(usuario, contraseña) {
  if (usuario.match(valoresAceptadosUsuario) && contraseña.length >= 4)
    location.href = "./index.html?usuario="+usuario;
  else
    document.getElementById("p_error").innerHTML =
      "usuario o contraseña incorrecto";
}

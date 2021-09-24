let salir_click = document.getElementById("btn-salir");

salir_click.onclick = function () {
  clickSalir();
};

function clickSalir() {
  location.href = "./login.html";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usuario = urlParams.get('usuario');
console.log(usuario);

document.getElementById("nombre_usuario").innerText = usuario;
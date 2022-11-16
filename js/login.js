const formlogin = document.getElementById("formregistro");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");

formlogin.addEventListener('submit', LoginUsuario);

function LoginUsuario(event){
    event.preventDefault();
    const getLocal = localStorage.getItem("usuario");
    const validarUsuario = JSON.parse(getLocal);

    if(correo.value ===""||contraseña.value===""){
        alert("Ingrese todos los datos");
    }
    //validar que el usuario exista
    else if(!validarUsuario.find(usuario => usuario.correo === correo.value)){
        alert("El usuario no existe");
    }
    //validar que la contraseña coincida
    else if(
        validarUsuario.find(usuario => usuario.correo === correo.value).contraseña !== contraseña.value){
            alert("Contraseña incorrecta");
        }
    else{
        alert("Usuario logeado con exito");
        window.location.href = "../index.html";
    }
}
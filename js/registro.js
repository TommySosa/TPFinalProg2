const formlogin = document.getElementById("formregistro");
const correo = document.getElementById("correo");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const contraseña = document.getElementById("contraseña");

const usuariosRegistrados = [];
formlogin.addEventListener('submit', RegistrarUsuarios);

function RegistrarUsuarios(event){
    event.preventDefault();
    const usuario = {
        correo : correo.value,
        contraseña : contraseña.value,
        nombre : nombre.value,
        apellido : apellido.value
    };
    if(
        correo.value === "" ||
        contraseña.value === "" ||
        nombre.value === "" ||
        apellido.value === "" 
    ) {
        alert("Ingrese todos los datos.");
    }
    else if (usuariosRegistrados.find(usuario => usuario.correo === correo.value)){
        alert("Usuario ya registrado.");
    }
    else{
        //Agrego el usuario
        usuariosRegistrados.push(usuario);
        //Guuardo el vector en el localStorage
        localStorage.setItem("usuario", JSON.stringify(usuariosRegistrados));
        alert("Usuario registrado con éxito.");

        correo.value = "";
        contraseña.value = "";
        nombre.value = "";
        apellido.value = "";
    }
}

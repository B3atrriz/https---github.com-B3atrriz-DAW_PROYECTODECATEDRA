// Validación básica del formulario
document.getElementById("form-contacto").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || correo === "" || mensaje === ""){
        alert(" Por favor completa todos los campos");
        return;
    }

    document.getElementById("msg-exito").style.display = "block";
    this.reset();
});


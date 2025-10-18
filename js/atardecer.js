const fotos = [
  { src: "../img/Imagen1.jpg", desc: "" },
  { src: "../img/Imagen2.jpg", desc: "" },
  { src: "../img/Imagen4.webp", desc: "" },
  { src: "../img/Imagen3.jpg", desc: "" },
  { src: "../img/imagen5.jpg", desc: "" },
  { src: "../img/Imagen6.jpg", desc: "" },
  { src: "../img/Imagen7.jpg", desc: "" },
  { src: "../img/Imagen8.webp", desc: "" },
  { src: "../img/Imagen9.jpg", desc: "" },
 
];

$(document).ready(function () {
  // Cargar galería desde JSON
  fotos.forEach(foto => {
    $("#contenedorFotos").append(`
      <div class="itemFoto">
        <img src="${foto.src}" alt="${foto.desc}">
        <p>${foto.desc}</p>
      </div>
    `);
  });

  // Mostrar sección según botón.
  
  $("nav button").click(function () {
    const seccion = $(this).attr("id").replace("btn", "").toLowerCase();
    $(".contenido").addClass("oculto").hide();
    $("#" + seccion).fadeIn(500).removeClass("oculto");
    localStorage.setItem("ultimaSeccion", seccion);
  });

  // Restaurar última vista
  const ultima = localStorage.getItem("ultimaSeccion");
  if (ultima) {
    $(".contenido").addClass("oculto");
    $("#" + ultima).removeClass("oculto");
  }

  // Click en imagen → mostrar descripción
  $(".galeria").on("click", "img", function () {
    const desc = $(this).attr("alt");
    alert("📸 " + desc);
  });
});
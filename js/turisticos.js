const fotos = [
  { src: "../img/Surf1.jpg", desc: "" },
  { src: "../img/Surf2.jpg", desc: "" },
  { src: "../img/Surf.webp", desc: "" },
  { src: "../img/Surf3.jpg", desc: "" },
  { src: "../img/Surf4.jpg", desc: "" },
  { src: "../img/Surf5.jpg", desc: "" },
  { src: "../img/Surf6.jpg", desc: "" },
  { src: "../img/Surf7.jpg", desc: "" },
  { src: "../img/Surf8.jpg", desc: "" },
 
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

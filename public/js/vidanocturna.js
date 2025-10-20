$(document).ready(function () {

  // Cargar fotos desde JSON usando AJAX
  $.getJSON("../js/vidanocturna.json", function(fotos) {
    fotos.forEach(foto => {
      $("#contenedorFotos").append(`
        <div class="itemFoto">
          <img src="../img/${foto.src}" alt="${foto.desc}">
          <p>${foto.desc}</p>
        </div>
      `);
    });
  }).fail(function() {
    console.error("Error al cargar fotos.json");
  });

  // Mostrar sección según botón
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

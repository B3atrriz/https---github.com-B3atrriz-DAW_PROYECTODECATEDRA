$(document).ready(function () {

  // Cargar fotos desde JSON usando AJAX
  $.getJSON("../js/sur.json", function(fotos) {
    fotos.forEach(foto => {
      $("#contenedorFotos").append(`
        <div class="itemFoto">
          <img src="../img/${foto.src}" alt="${foto.desc}">
          <p>${foto.desc}</p>
        </div>
      `);
    });
  }).fail(function() {
    console.error("Error al cargar fotos_surf.json");
  });

  // Click en imagen → mostrar descripción
  $(".galeria").on("click", "img", function () {
    const desc = $(this).attr("alt");
    alert("📸 " + desc);
  });

});

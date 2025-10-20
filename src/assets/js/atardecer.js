const fotos = [
  { src: "src/assets/img/Imagen1.jpg", desc: "" },
  { src: "src/assets/img/Imagen2.jpg", desc: "" },
  { src: "src/assets/img/Imagen4.webp", desc: "" },
  { src: "src/assets/img/Imagen3.jpg", desc: "" },
  { src: "src/assets/img/imagen5.jpg", desc: "" },
  { src: "src/assets/img/Imagen6.jpg", desc: "" },
  { src: "src/assets/img/Imagen7.jpg", desc: "" },
  { src: "src/assets/img/Imagen8.webp", desc: "" },
  { src: "src/assets/img/Imagen9.jpg", desc: "" },
];

$(document).ready(function () {
  // Cargar galería desde JSON
  $.getJSON("js/fotos.json", function(fotos) {
  fotos.forEach(foto => {
    $("#contenedorFotos").append(`
      <div class="itemFoto">
        <img src="${foto.src}" alt="${foto.desc}">
        <p>${foto.desc}</p>
      </div>
    `);
  });
});


  // Click en imagen → mostrar descripción
  $(".galeria").on("click", "img", function () {
    const desc = $(this).attr("alt");
    alert("📸 " + desc);
  });
});

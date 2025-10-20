const fotos = [
  { src: "/src/assets/img/Surf1.jpg", desc: "" },
  { src: "/src/assets/img/Surf2.jpg", desc: "" },
  { src: "/src/assets/img/Surf.webp", desc: "" },
  { src: "/src/assets/img/Surf3.jpg", desc: "" },
  { src: "/src/assets/img/Surf4.jpg", desc: "" },
  { src: "/src/assets/img/Surf5.jpg", desc: "" },
  { src: "/src/assets/img/Surf6.jpg", desc: "" },
  { src: "/src/assets/img/Surf7.jpg", desc: "" },
  { src: "/src/assets/img/Surf8.jpg", desc: "" },
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

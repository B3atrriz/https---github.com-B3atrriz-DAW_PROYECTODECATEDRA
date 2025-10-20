const fotos = [
  { src: "src/assets/img/Atardecer.jpg", desc: "Atardecer en la playa" },
  { src: "src/assets/img/Roca.webp", desc: "Roca emblemática del Tunco" },
  { src: "src/assets/img/Surf.webp", desc: "Surfistas disfrutando del mar" },
  { src: "src/assets/img/VAerea.jpg", desc: "Vista aérea del Tunco" },
  { src: "src/assets/img/calle2.jpeg", desc: "Calle principal" },
  { src: "src/assets/img/tunco.webp", desc: "Sol y Arena" },
  { src: "src/assets/img/amanecer.webp", desc: "Amanecer" },
  { src: "src/assets/img/puestos.jpg", desc: "Ambiente relajado" },
  { src: "src/assets/img/noche.jpg", desc: "Noche con luces y música" },
  { src: "src/assets/img/surfcity.jpg", desc: "Atardecer Surf City" },
  { src: "src/assets/img/noche2.jpg", desc: "Buena Vibra" },
  { src: "src/assets/img/olas.jpg", desc: "Olas" },
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
const fotos = [
  { src: "../img/Atardecer.jpg", desc: "Atardecer en la playa" },
  { src: "../img/Roca.webp", desc: "Roca emblemática del Tunco" },
  { src: "../img/Surf.webp", desc: "Surfistas disfrutando del mar" },
  { src: "../img/VAerea.jpg", desc: "Vista aérea del Tunco" },
  { src: "../img/calle2.jpeg", desc: "Calle principal" },
  { src: "../img/tunco.webp", desc: "Sol y Arena" },
  { src: "../img/amanecer.webp", desc: "Amanecer" },
  { src: "../img/puestos.jpg", desc: "Ambiente relajado" },
  { src: "../img/noche.jpg", desc: "Noche con luces y música" },
  { src: "../img/surfcity.jpg", desc: "Atardecer Surf City" },
  { src: "../img/noche2.jpg", desc: "Buena Vibra" },
  { src: "../img/olas.jpg", desc: "Olas" },
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
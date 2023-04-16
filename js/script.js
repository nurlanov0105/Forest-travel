const navIcon = document.querySelector("#nav-icon");
const nav = document.querySelector("#nav");

navIcon.addEventListener("click", function () {
   this.classList.toggle("header-nav-button--active");

   nav.classList.toggle("nav--active");
});

let center = [55.84776192250137, 37.48362378836061];

function init() {
   let map = new ymaps.Map("map", {
      center: center,
      zoom: 17,
   });

   let placemark = new ymaps.Placemark(
      center,
      {
         balloonContentHeader: "Хедер Балуна",
         balloonContentBody: "Боди балуна",
         balloonContentFooter: "Футер балуна",
      },
      {
         iconLayout: "default#image",
         iconImageHref:
            "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
         iconImageSize: [50, 50],
         iconImageOffset: [-25, -37],
      }
   );

   let placemark1 = new ymaps.Placemark(
      center,
      {
         balloonContent: `
         
        `,
      },
      {
         preset: "islands#redGlyphIcon",
         iconGlyph: "music",
         iconGlyphColor: "black",
         iconImageSize: [50, 50],
         iconImageOffset: [-25, -37],
      }
   );

   map.geoObjects.add(placemark1);
}

ymaps.ready(init);

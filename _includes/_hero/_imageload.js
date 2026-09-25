// Array of image objects
const images = [
  {
        src: "https://www.ny.gov/sites/default/files/2026-09/GKH_ChildCareConstructionFund.jpg",
        alt: "hildren gather around Governor Hochul in a classroom as she smiles.",
        caption: "Governor Hochul greets students at an event marking progress towards Universal Child Care - Brooklyn, NY",
        focalPoint: "center"
    },
    {
        src: "https://www.ny.gov/sites/default/files/2026-09/GKH_DataCenterMoratorium.jpg",
        alt: "Governor Hochul holds a signed document while three people applaud behind her. Governor Hochul is in an olive-green blazer, holding an official document as three standing adults applaud behind her. The U.S. and New York State flags are visible in the background.",
        caption: "Governor Kathy Hochul signs Executive Order to create the nation’s first moratorium on new hyperscale data centers - Brooklyn, NY",
        focalPoint: "center"
    },
    {
        src: "https://www.ny.gov/sites/default/files/2026-09/GKH_LowerAutoInsurance.jpg",
        alt: "Governor Hochul at a bill signing in an auto repair shop. Governor Hochul sits at a table inside of an auto repair garage, pointing towards a signed document. Workers in mechanic uniforms stand around them.",
        caption: "Governor Hochul secures reforms to lower auto insurance premiums - New York, NY",
        focalPoint: "center"
    },
    {
        src: "https://www.ny.gov/sites/default/files/2026-09/GKH_SummerFoodAssistance.jpg",
        alt: "Governor Hochul talks with a student in a classroom. Governor Hochul leans over a table in a bright yellow classroom to speak with seated student wearing matching purple t-shirts.",
        caption: "Governor Hochul has signed nation-leading legislation to protect kids online - New York, NY",
        focalPoint: "center"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide_tall/public/2026-09/AlbanyAutumn_01%20%281%29.jpg?itok=kXn6HUKJ&focal_point_preview_value=50x50",
        alt: "Fall foliage fills a park below the downtown Albany skyline under heavy clouds. Trees with fall foliage and the Empire State Plaza.",
        caption: "Aerial view of Albany foliage – Albany, NY",
        focalPoint: "center"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide/public/2026-09/NYCBridge.JPG?itok=82jL4o9i&focal_point_preview_value=50x50",
        alt: "The Brooklyn Bridge lit at dusk with the Lower Manhattan skyline. The Brooklyn Bridge is lit above the East River with the Lower Manhattan skyline behind it, including One World Trade Center. Building lights are seen reflecting on the water.",
        caption: "Brooklyn Bridge – New York City, NY",
        focalPoint: "right"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide_tall/public/2026-09/Fall_River%20%281%29.jpg?h=b5f6a62e&itok=We2pEP8E&focal_point_preview_value=50x50",
        alt: "A lighthouse on a stone pier with fall foliage and mountains behind it. A red brick lighthouse with a white tower stands on a stone base in the middle of a wide river. Behind it, fall foliage and layered mountains.",
        caption: "Hudson-Athens Lighthouse – Hudson, NY",
        focalPoint: "left"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide_tall/public/2026-09/AlbanyCapitolBuildingFoliage.jpg?itok=JL5hVMgr&focal_point_preview_value=50x50",
        alt: "Autumn foliage, a colorful flowerbed, and a statue of a man on a horse surround the New York State Capitol building. The New York State Capitol seen on a sunny autumn day with yellow and orange leaves lining trees and a statue of a man on a horse. A bed of flowers fills the front.",
        caption: "New York State Capitol fall foliage – Albany, NY",
        focalPoint: "center"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide_tall/public/2026-09/MontaukLighthouse_WestSide_morning.jpg?itok=M7GH0Esr&focal_point_preview_value=50x50",
        alt: "The Montauk Lighthouse is lit at dawn on a grassy hill, under a purple sky. A white lighthouse and a house next to it are lit up on a grassy hill at dawn. The sky is purple and cloudy, with a little orange on the horizon, with rocks sitting in the front.",
        caption: "Montauk Lighthouse during Sunrise – Montauk, NY",
        focalPoint: "right"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide_tall/public/2026-09/LakePlacidOlympicSkiJumpingComplex.jpg?itok=rBSMutgs&focal_point_preview_value=50x50",
        alt: "A panoramic view showing trees in autumn and the lake placid ski jumping complex in the background.",
        caption: "Lake Placid Olympic Ski Jumping Complex - Lake Placid, NY",
        focalPoint: "left"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide_tall/public/2026-09/FrederickDouglassSusanBAnthonyMemorialBridge.jpg?itok=Lw5ngsq6&focal_point_preview_value=50x50",
        alt: "A steel arch bridge lit at dusk above the river, with the downtown Rochester, NY skyline behind it.",
        caption: "Frederick Douglass and Susan B. Anthony Memorial Bridge -  Rochester, NY",
        focalPoint: "center"
    },
    {
        src: "https://www.ny.gov/sites/default/files/styles/hero_wide_tall/public/2026-09/ChittenangoFallsStatePark.jpg?itok=Yj9FkWpR&focal_point_preview_value=50x50",
        alt: "A waterfall of several layers features prominently at the center with cliff faces and greenery, flowers, and trees on either side.",
        caption: "Chittenango Falls State Park - Cazenovia, NY",
        focalPoint: "center"
    }
];

function loadRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  const imageElement = document.getElementById('random-reload-image');
  const captionElement = document.getElementById('random-reload-caption');

  // Update the image and caption
  imageElement.src = selectedImage.src;
  imageElement.alt = selectedImage.alt;
  captionElement.textContent = selectedImage.caption;

  // Remove any previous focal-point classes
  imageElement.classList.remove(
    'object-left',
    'object-center',
    'object-right'
  );

  // Add the focal-point class based on the selected image
  imageElement.classList.add(`object-${selectedImage.focalPoint}`);
}

// Load a random image when the page loads
window.addEventListener('load', loadRandomImage);

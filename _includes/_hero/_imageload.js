// Array of image objects
const images = [
  {
    src: 'https://www.ny.gov/sites/default/files/2026-09/GKH_ChildCareConstructionFund.jpg',
    alt: 'Children gather around Governor Hochul in a classroom as she smiles.',
    caption: 'Governor Hochul with students, Brooklyn, NY',
    focalPoint: 'center'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/2026-09/GKH_DataCenterMoratorium.jpg',
    alt: 'Governor Hochul holds a signed document while three people applaud behind her.',
    caption: 'Governor Kathy Hochul Creates Moratorium on Data Centers, Brooklyn, NY',
    focalPoint: 'center'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/2026-09/GKH_LowerAutoInsurance.jpg',
    alt: 'Governor Hochul at a bill signing in an auto repair shop.',
    caption: 'Governor Hochul Secures Reforms to Lower Auto Insurance Premiums, New York, NY',
    focalPoint: 'center'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/2026-09/GKH_MamdaniJamesProtectionAgainstICE.jpg',
    alt: 'Governor Hochul speaks at a podium as officials stand behind her.',
    caption: 'Governor Hochul, Mayor Mamdani and Attorney General James Stand Up to ICE Overreach and Reaffirm Protections for New Yorkers, New York, NY',
    focalPoint: 'center'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/2026-09/GKH_SummerFoodAssistance.jpg',
    alt: 'Governor Hochul talks with students in a classroom.',
    caption: 'Governor Hochul Announces Food Assistance to More Than 1.8 Million Children, New York, NY',
    focalPoint: 'center'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/styles/hero_wide/public/2026-09/AlbanyAutumn_01.jpg?h=26eb8729&itok=Hx3jH9rv&focal_point_preview_value=50x50',
    alt: 'Trees with fall foliage and the Empire State Plaza',
    caption: 'Autumn in downtown Albany, NY.',
    focalPoint: 'center'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/styles/hero_wide/public/2026-09/NYCBridge.JPG?itok=82jL4o9i&focal_point_preview_value=50x50',
    alt: 'The Brooklyn Bridge lit at dusk with the Lower Manhattan skyline.',
    caption: 'Brooklyn Bridge, New York City, NY',
    focalPoint: 'right'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/styles/hero_wide/public/2026-09/Niagara-Falls-Fall.jpg?itok=S6gw0XsD&focal_point_preview_value=50x50',
    alt: 'Fall foliage along the American Falls with spectators at the overlook in Niagara Falls, NY.',
    caption: 'American Falls, Niagara Falls, NY',
    focalPoint: 'left'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/styles/sections_background_image/public/2026-09/Fall_River.jpg?itok=QxUlqwgy&focal_point_preview_value=50x50',
    alt: 'A lighthouse on a stone pier with fall foliage and mountains behind it.',
    caption: 'Hudson-Athens Lighthouse, Hudson/Athens, NY',
    focalPoint: 'left'
  },
  {
    src: 'https://www.ny.gov/sites/default/files/2026-09/EdwardMCotterFireboatBuffaloNY.jpg',
    alt: 'Water jets spray from the Edward M Cotter fireboat into the river beneath a highway bridge.',
    caption: 'Frederick M. Cotter Fireboat, Buffalo, NY',
    focalPoint: 'left'
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

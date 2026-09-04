
    // Array of image objects
    const images = [
        {
        src: 'https://nygovd8devbox2.prod.acquia-sites.com/sites/default/files/styles/hero_wide/public/2026-09/AlbanyAutumn_01.JPG?h=26eb8729&itok=SSy3hT4n&focal_point_preview_value=50x50',
        alt: 'A wide-angle view of Albany with fall foliage in the forefront.',
        caption: 'Fall Albany Foliage Cityscape City'
        },
        {
        src: 'https://nygovd8devbox2.prod.acquia-sites.com/sites/default/files/styles/hero_wide_tall/public/2026-09/AlbanyAerials_01.JPG?h=ac4592dd&itok=dQi9UIXV&focal_point_preview_value=66x46',
        alt: 'An aerial view of Albany New York',
        caption: 'Albany Aerial Cityscape City'
        },
        {
        src: 'https://nygovd8devbox2.prod.acquia-sites.com/sites/default/files/styles/hero_wide_tall/public/2026-09/AlbanyCapitol.jpg?h=b5f6a62e&itok=9sjEkzrW&focal_point_preview_value=50x50',
        alt: 'A shot of Albany buildings glowing at dusk',
        caption: 'Albany Capitol Dusk Downtown New York'
        },
            {
        src: 'https://nygovd8devbox2.prod.acquia-sites.com/sites/default/files/styles/hero_wide_tall/public/2026-09/Long_Island_Spring_Daffodils_Bayard_Cutting.gif?itok=qqdBYUcQ&focal_point_preview_value=50x50',
        alt: 'Spring daffodils bloom in front of an arboretum.',
        caption: 'Long Island Spring Daffodils Bayard Cutting'
        },
        {
        src: 'https://nygovd8devbox2.prod.acquia-sites.com/sites/default/files/styles/hero_wide_tall/public/2026-09/LI_Montauk_Lighthouse_Montauk_Point_State_Park.jpg?itok=DuN1qWD5&focal_point_preview_value=50x50',
        alt: 'A scenic view of a lighthouse on the coast.',
        caption: 'Montauk Lighthouse Montauk Point State Park Long Island'
        }
        // Add more images as needed
    ];

    function loadRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];

        // Update the image and caption
        document.getElementById('random-reload-image').src = selectedImage.src;
        document.getElementById('random-reload-image').alt = selectedImage.alt;
        document.getElementById('random-reload-caption').textContent = selectedImage.caption;        
    }

    // Load a random image when the page loads
    window.onload = loadRandomImage;
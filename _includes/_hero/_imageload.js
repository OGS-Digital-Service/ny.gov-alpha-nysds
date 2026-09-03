
    // Array of image objects
    const images = [
        {
            src: 'https://nygovd8devbox1.prod.acquia-sites.com/sites/default/files/styles/hero_wide_tall/public/2026-09/AlbanyAutumn_01.JPG?h=426803fe&itok=ltW-Ml5p&focal_point_preview_value=57x18',
            alt: 'A wide-angle view of Albany with fall foliage in the forefront.',
            caption: 'Fall Albany Foliage Cityscape City'
        },
        {
            src: 'https://nygovd8devbox1.prod.acquia-sites.com/sites/default/files/styles/hero_wide_short/public/2026-09/AlbanyAerials_01.JPG?itok=8y_DddHz&focal_point_preview_value=50x50',
            alt: 'An aerial view of Albany New York',
            caption: 'Albany Aerial Cityscape City'
        },
        {
            src: 'https://nygovd8devbox1.prod.acquia-sites.com/sites/default/files/styles/hero_wide_tall/public/2026-09/LI_Montauk_Lighthouse_Montauk_Point_State_Park.jpg?h=c5f5e628&itok=OC4a0euu&focal_point_preview_value=50x50',
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

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('reimagine-hero-search-input');
    const submitSearch = document.getElementById('reimagine-hero-search-submit');
    console.log(searchInput)
    function searchServices(e) {
        e.preventDefault();
        var searchTerm = searchInput.value;

        if (!searchTerm.trim()) {  // Check for empty or whitespace-only input
            window.location.href = "/search";
        } else {
            // First replace & with " and ", then encodeURIComponent
            const cleanSearchTerm = searchTerm.replace(/&/g, 'and');
            const encodedSearchTerm = encodeURIComponent(cleanSearchTerm);

            // Split the encoded term into parts to handle spaces correctly
            const parts = encodedSearchTerm.split('+');
            const properlyEncodedParts = parts.map(part => {
                if (part.includes('and')) {
                    return part.replace(/&/g, ' and').replace(/\+/g, '%20');  // Fix any remaining issues
                }
                return encodeURIComponent(part);
            });

            window.location.href = `/search/?searchstax[query]=${parts.join('%20')}&searchstax[page]=1&searchstax[model]=Sitewide`;
        }
    }

    submitSearch.addEventListener("click", searchServices);
});

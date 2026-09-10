 document.addEventListener('DOMContentLoaded', function() {
            // Select the element with data-name="tourism paragraph"
            const tourismParagraphElement = document.querySelector('[data-name="tourism paragraph"]');

            // Check if the element exists
            if (tourismParagraphElement) {
                // Find the closest element with class 't-section__content'
                const targetElement = tourismParagraphElement.closest('.t-section__content');

                // Check if the target element exists
                if (targetElement) {
                    // Add the class 'no-margin-top' to the closest parent with class 't-section__content'
                    targetElement.classList.add('-no-margin-top');
                } else {
                    console.warn('No element with the class "t-section__content" found within the specified context.');
                }
            } else {
                console.warn('No element with data-name="tourism paragraph" found.');
            }
        });
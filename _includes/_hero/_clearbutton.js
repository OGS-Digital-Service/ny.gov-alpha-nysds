  const searchInput = document.getElementById('reimagine-hero-search-input');
  const clearBtn = document.getElementById('ny-hero-search-clear');

  function toggleClearBtn() {
    if (searchInput.value.length > 0) {
      clearBtn.classList.remove('hidden');
      clearBtn.classList.add('flex');
    } else {
      clearBtn.classList.add('hidden');
      clearBtn.classList.remove('flex');
    }
  }

  searchInput.addEventListener('input', toggleClearBtn);

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    toggleClearBtn();
    searchInput.focus();
  });

  // run once on load in case the field is pre-filled
  toggleClearBtn();
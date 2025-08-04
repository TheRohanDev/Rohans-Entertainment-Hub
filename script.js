// Toggle Read More / Read Less
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const movieInfo = button.closest('.movie-info');
        const shortDesc = movieInfo.querySelector('.description.short');
        const fullDesc = movieInfo.querySelector('.description.full');

        if (fullDesc.classList.contains('hidden')) {
            fullDesc.classList.remove('hidden');
            shortDesc.classList.add('hidden');
            button.textContent = 'Read Less';
        } else {
            fullDesc.classList.add('hidden');
            shortDesc.classList.remove('hidden');
            button.textContent = 'Read More';
        }
    });
});



/* ***************************************** NAVBAR************************************************ */

// document.addEventListener('DOMContentLoaded', () => {
//     const blazeToggle = document.getElementById('blazeToggle');
//     const blazeMenu = document.getElementById('blazeMenu');
//     const menuItems = document.querySelectorAll('.blaze-menu-item');

//     // 📱 Toggle menu on 3-line button
//     blazeToggle.addEventListener('click', () => {
//         blazeMenu.classList.toggle('show');
//     });

//     // 📱 Auto-close menu on item click (only mobile)
//     menuItems.forEach(item => {
//         item.addEventListener('click', () => {
//             if (window.innerWidth <= 768) {
//                 blazeMenu.classList.remove('show');
//             }
//         });
//     });
// });

// let lastScrollY = window.scrollY;
// const navbar = document.querySelector('.blaze-navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > lastScrollY) {
//         // user is scrolling down
//         navbar.style.transform = 'translateY(-100%)';
//     } else {
//         // user is scrolling up
//         navbar.style.transform = 'translateY(0)';
//     }
//     lastScrollY = window.scrollY;
// });

document.addEventListener('DOMContentLoaded', () => {
    const blazeToggle = document.getElementById('blazeToggle');
    const blazeMenu = document.getElementById('blazeMenu');
    const menuItems = document.querySelectorAll('.blaze-menu-item');

    // 📱 Toggle menu on 3-line button
    blazeToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // ⛔ Prevent outside click trigger
        blazeMenu.classList.toggle('show');
    });

    // 📱 Auto-close menu on item click (only mobile)
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                blazeMenu.classList.remove('show');
            }
        });
    });

    // 📱 Close menu when clicked outside
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = blazeMenu.contains(e.target);
        const isClickOnToggle = blazeToggle.contains(e.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            blazeMenu.classList.remove('show');
        }
    });
});

// 🔽 Navbar hide on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.blaze-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // user is scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // user is scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});


// ***********************************************Inspect section Blocking*********************************************************



document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});




document.onkeydown = function(e) {
    if (e.keyCode === 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) return false; // Ctrl+Shift+I
    if (e.ctrlKey && e.keyCode === 85) return false; // Ctrl+U
    if (e.ctrlKey && e.keyCode === 83) return false; // Ctrl+S
};


// ************************************************Code Copy Blocking***********************************************************************************


document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', 'Copying is disabled!');
    e.preventDefault();
});


/* ************LEFT SIDE NAVBAR***********************LEFT SIDE NAVBAR*****************************LEFT SIDE NAVBAR*******************************LEFT SIDE NAVBAR****************************************LEFT SIDE NAVBAR**************************************LEFT SIDE NAVBAR***************************LEFT SIDE NAVBAR*********************** */


const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

// Toggle sidebar on toggle button click
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar if clicked outside OR on any sidebar link
document.addEventListener('click', function(e) {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggle = toggleBtn.contains(e.target);

    // If clicked outside OR clicked on any link inside sidebar
    if (!isClickInsideSidebar && !isClickOnToggle) {
        sidebar.classList.remove('active');
    }

    // ✅ Extra: if clicked on any item inside the sidebar
    if (isClickInsideSidebar && e.target.tagName === 'A') {
        sidebar.classList.remove('active');
    }
});


// ************************************SCROLLING IMAGE ROW**************************************************************SCROLLING IMAGE ROW********************************************************SCROLLING IMAGE ROW************************************************SCROLLING IMAGE ROW***********************************************************SCROLLING IMAGE ROW****************************

const wrappers = document.querySelectorAll('.movie-row-wrapper-lyro');

wrappers.forEach(wrapper => {
    const row = wrapper.querySelector('.movie-row-auto-lyro');

    wrapper.scrollLeft = 0;

    function autoScroll() {
        wrapper.scrollLeft += 1;

        if (wrapper.scrollLeft >= row.scrollWidth / 2) {
            wrapper.scrollLeft = 0;
        }
    }

    let scrollInterval = setInterval(autoScroll, 20);

    wrapper.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    wrapper.addEventListener('mouseleave', () => {
        scrollInterval = setInterval(autoScroll, 20);
    });

    wrapper.addEventListener('scroll', () => {
        if (wrapper.scrollLeft >= row.scrollWidth / 2) {
            wrapper.scrollLeft = 0;
        }
    });
});



// ******************************* SEARCH BAR *********************************************** SEARCH BAR ************************************** SEARCH BAR ************************************* SEARCH BAR ******************************************** SEARCH BAR ******************************************* SEARCH BAR ******************************* SEARCH BAR **************************************

// (function() {
//     // Use let (not const) so redeclaration doesn't error if this runs multiple times
//     let toggleBtn = document.getElementById('toggleSearch');
//     let searchBox = document.getElementById('searchBox');
//     let searchInput = document.getElementById('searchInput');

//     if (!toggleBtn || !searchBox || !searchInput) return;

//     // Toggle search box
//     toggleBtn.addEventListener('click', () => {
//         searchBox.classList.toggle('active');
//         if (searchBox.classList.contains('active')) {
//             searchInput.focus();
//         }
//     });

//     // Close search on outside click
//     document.addEventListener('click', function(e) {
//         const isClickInside = toggleBtn.contains(e.target) || searchBox.contains(e.target);
//         if (!isClickInside) {
//             searchBox.classList.remove('active');
//         }
//     });

//     // Real-time search
//     searchInput.addEventListener('input', function() {
//         const filter = this.value.trim().toLowerCase();
//         const allCards = document.querySelectorAll('#sectionmoviehome .movie-card');

//         allCards.forEach(card => {
//             const title = card.querySelector('h2')?.textContent.toLowerCase();
//             card.style.display = title && title.includes(filter) ? 'block' : 'none';
//         });
//     });
// })();



(function() {
    const toggleBtn = document.getElementById('toggleSearch');
    const searchBox = document.getElementById('searchBox');
    const searchInput = document.getElementById('searchInput');
    const resultCountEl = document.getElementById('resultCount'); // ✅ new

    if (!toggleBtn || !searchBox || !searchInput) return;

    // 🔍 Toggle search bar visibility
    toggleBtn.addEventListener('click', () => {
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // ❌ Close search bar if user clicks outside
    document.addEventListener('click', function(e) {
        const isClickInside =
            toggleBtn.contains(e.target) || searchBox.contains(e.target);
        if (!isClickInside) {
            searchBox.classList.remove('active');
        }
    });

    // 🧭 Identify currently visible section (based on display)
    function getActiveSectionContainer() {
        const sectionIds = [
            'sectionmoviehome',
            'sectionmovie',
            'sectionseries',
            'sectioncartoon',
            'sectiontreading'
        ];

        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el && el.offsetParent !== null) {
                return el; // visible section
            }
        }

        // Default fallback (home)
        return document.getElementById('sectionmoviehome');
    }

    // 🔎 Real-time section-based movie search with result count
    searchInput.addEventListener('input', function() {
        const filter = this.value.trim().toLowerCase();
        const activeSection = getActiveSectionContainer();
        if (!activeSection) return;

        const cards = activeSection.querySelectorAll('.movie-card');
        let matchCount = 0;

        cards.forEach(card => {
            const titleElement = card.querySelector('h2');
            const title = titleElement ? titleElement.textContent.toLowerCase() : '';

            if (title && title.includes(filter)) {
                card.style.display = 'block';
                matchCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // ✅ Update result count
        if (resultCountEl) {
            resultCountEl.textContent = matchCount;
        }
    });

    // 📱 Hide mobile keyboard on Enter press
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchInput.blur(); // Hides mobile keyboard
        }
    });
})();
// main.js - Core Dev Mode and Navigation functionality

// Course selection function - needs to be global for onclick
function selectCourse(course) {
    const searchInput = document.getElementById('searchInput');
    const customDropdown = document.getElementById('customDropdown');
    if (searchInput) {
        searchInput.value = course;
        if (customDropdown) {
            customDropdown.classList.remove('active');
        }
        console.log('Course selected:', course);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded at', new Date().toLocaleString());

    // Core variables for index.html functionality
    const fragmentsContainer = document.querySelector('.code-fragments');
    const devModeToggle = document.getElementById('dev-mode');
    const devModeAnimation = document.getElementById('devModeAnimation');
    const navbar = document.getElementById('navbar');
    const navbarPlaceholder = document.getElementById('navbarPlaceholder');
    const scrollToLearn = document.getElementById('scrollToLearn');
    const mainContent = document.getElementById('mainContent');
    const textContent = document.getElementById('textContent');
    const toggleSwitch = document.getElementById('toggleSwitch');
    const mainHeading = document.getElementById('mainHeading');
    const potentialText = document.getElementById('potentialText');
    const kickstartText = document.getElementById('kickstartText');
    const startJourneyText = document.getElementById('startJourneyText');
    const searchInput = document.getElementById('searchInput');
    const customDropdown = document.getElementById('customDropdown');

    // Disable scrolling by default
    document.body.style.overflow = 'hidden';

    // Check datalist support
    const isDatalistSupported = 'list' in document.createElement('input') && Boolean(document.createElement('datalist') && document.createElement('option'));
    let useCustomDropdown = !isDatalistSupported;

    // Dev Mode toggle
    if (devModeToggle) {
        devModeToggle.addEventListener('change', function() {
            console.log('Dev Mode toggled:', this.checked);
            if (this.checked) {
                mainHeading.textContent = 'BE YOUR BEST IN';
                potentialText.textContent = 'Learn something new today!';
                kickstartText.style.display = 'none';
                startJourneyText.style.display = 'block';
                devModeAnimation.classList.add('active');
                navbar.classList.add('active');
                navbarPlaceholder.classList.add('hidden');
                scrollToLearn.classList.add('active');
                mainContent.classList.add('dev-mode-on');
                textContent.classList.add('dev-mode-on');
                toggleSwitch.classList.add('dev-mode-on');
                document.body.style.overflow = 'auto';
                searchInput.placeholder = 'Select a course...';
                searchInput.value = '';
                if (useCustomDropdown) searchInput.removeAttribute('list');
            } else {
                mainHeading.textContent = 'DIVE INTO DEV MODE';
                potentialText.textContent = 'Unlock Your Potential and Make an Impact with Your Skills!';
                kickstartText.style.display = 'block';
                startJourneyText.style.display = 'none';
                devModeAnimation.classList.remove('active');
                navbar.classList.remove('active');
                navbarPlaceholder.classList.remove('hidden');
                scrollToLearn.classList.remove('active');
                mainContent.classList.remove('dev-mode-on');
                textContent.classList.remove('dev-mode-on');
                toggleSwitch.classList.remove('dev-mode-on');
                document.body.style.overflow = 'hidden';
                searchInput.placeholder = 'Search for skills, subjects';
                searchInput.value = '';
                customDropdown.classList.remove('active');
                if (useCustomDropdown) searchInput.setAttribute('list', 'courses');
            }
        });
    } else {
        console.error('Error: dev-mode toggle not found');
    }

    // Custom dropdown handling
    if (useCustomDropdown && searchInput && customDropdown) {
        searchInput.addEventListener('click', () => {
            if (devModeToggle.checked) {
                console.log('Search input clicked');
                customDropdown.classList.add('active');
            }
        });
        searchInput.addEventListener('input', () => {
            if (devModeToggle.checked) {
                const filter = searchInput.value.toLowerCase();
                const options = customDropdown.querySelectorAll('div');
                options.forEach(option => {
                    option.style.display = option.textContent.toLowerCase().includes(filter) ? 'block' : 'none';
                });
                customDropdown.classList.add('active');
            }
        });
        document.addEventListener('click', e => {
            if (!searchInput.contains(e.target) && !customDropdown.contains(e.target)) {
                customDropdown.classList.remove('active');
            }
        });
    }

    // Dev Mode animation
    if (fragmentsContainer) {
        document.querySelector('.dev-mode-animation').addEventListener('mousemove', e => {
            const rect = fragmentsContainer.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 50;
            const y = (e.clientY - rect.top - rect.height / 2) / 50;
            fragmentsContainer.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
        });
        document.querySelector('.dev-mode-animation').addEventListener('mouseleave', () => {
            fragmentsContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }

    // Scroll event
    window.addEventListener('scroll', () => {
        const coursesHeader = document.querySelector('.header');
        if (coursesHeader && scrollToLearn) {
            const headerRect = coursesHeader.getBoundingClientRect();
            const scrollPosition = window.scrollY + window.innerHeight;
            const headerTop = headerRect.top + window.scrollY;
            if (scrollPosition > headerTop) {
                scrollToLearn.style.opacity = '0';
                scrollToLearn.style.pointerEvents = 'none';
            } else if (scrollToLearn.classList.contains('active')) {
                scrollToLearn.style.opacity = '1';
                scrollToLearn.style.pointerEvents = 'auto';
            }
        }
    });
});
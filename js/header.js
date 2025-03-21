/**
 * Header functionality for Streaming & Sports Hub
 * Handles navigation highlighting and responsive menu
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current URL
    setActiveNavLink();
    
    // Mobile menu toggle functionality (if needed in the future)
    setupMobileMenu();
});

/**
 * Sets the active navigation link based on the current URL path
 */
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        // Remove any existing active classes
        link.classList.remove('active');
        
        // Get the path from the href attribute
        const linkPath = new URL(link.href, window.location.origin).pathname;
        
        // Check if this link matches the current path
        if (currentPath === linkPath || 
            (linkPath !== '/home' && linkPath !== '/' && currentPath.startsWith(linkPath))) {
            link.classList.add('active');
        }
    });
}

/**
 * Sets up mobile menu functionality (for future expansion)
 */
function setupMobileMenu() {
    // This is a placeholder for future mobile menu implementation
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('nav ul');
            navMenu.classList.toggle('show');
        });
    }
}

/**
 * Helper function to handle fullscreen mode
 */
function toggleFullscreen() {
    const iframe = document.getElementById('realframe');
    
    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) { /* Safari */
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { /* IE11 */
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}

/**
 * Dynamically update iframe source based on the URL parameter
 * This is a placeholder function if you want to implement dynamic content loading
 */
function loadContent(url) {
    const iframe = document.getElementById('realframe');
    const proxyBase = 'https://prx2new-dylan-25-xjv9zmqstfkgroh8bwpcednylau63h7281.nettspend.live/?rurl=';
    
    if (iframe) {
        iframe.src = proxyBase + url;
    }
}

// Night mode toggle functionality

function initializeNightMode() {
    const nightModeBtn = document.getElementById('night-mode-btn');
    
    if (!nightModeBtn) {
        console.warn('Night mode button not found on this page');
        return;
    }

    // Check if user has a saved preference
    const savedMode = localStorage.getItem('nightmode');
    if (savedMode === 'enabled') {
        document.body.classList.add('night-mode');
        updateButtonText(nightModeBtn);
    }

    // Add event listener to the night mode button
    nightModeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleNightMode(nightModeBtn);
    });
}

function toggleNightMode(btn) {
    document.body.classList.toggle('night-mode');
    
    // Save preference to localStorage
    if (document.body.classList.contains('night-mode')) {
        localStorage.setItem('nightmode', 'enabled');
    } else {
        localStorage.setItem('nightmode', 'disabled');
    }

    updateButtonText(btn);
}

function updateButtonText(btn) {
    if (document.body.classList.contains('night-mode')) {
        btn.textContent = '☀️ Light Mode';
    } else {
        btn.textContent = '🌙 Night Mode';
    }
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNightMode);
} else {
    // DOM is already loaded (script loaded after content)
    setTimeout(initializeNightMode, 0);
}



// Updated: 2026-01-22
/* ===============================================================
   Learning Hub - Shared Scripts
   =============================================================== */



/**
 * Initialize Accordion
 */
function initAccordion() {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');

            // Toggle active state
            item.classList.toggle('active');

            // Handle max-height for transition
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
}

/**
 * Get the correct URL for homepage based on current location
 */
function getHomeUrl() {
    return '/';
}

// Redirect function removed. Use native <a href> tags.

/**
 * Navigation scroll effect - adds 'scrolled' class when scrolling
 */
function initNavScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initNavScroll();
    initContactModal();
    initAccordion();
});



/* ================= CONTACT MODAL ================= */

/**
 * Open contact modal
 */
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close contact modal
 */
function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Reset form after closing
        setTimeout(() => {
            const form = document.getElementById('contactForm');
            const formContainer = modal.querySelector('.contact-form-container');
            const successContainer = modal.querySelector('.contact-success');
            if (form) form.reset();
            if (formContainer) formContainer.style.display = 'block';
            if (successContainer) successContainer.classList.remove('active');
        }, 300);
    }
}

/**
 * Initialize contact modal event listeners
 */
function initContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeContactModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeContactModal();
            }
        });
    }

    // Initialize form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleContactSubmit);
    }
}

/**
 * Handle contact form submission
 */
async function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('.contact-submit');
    const formContainer = document.querySelector('.contact-form-container');
    const successContainer = document.querySelector('.contact-success');

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Get form data
    const formData = new FormData(form);

    try {
        // Send using Web3Forms (free email API)
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Show success message
            formContainer.style.display = 'none';
            successContainer.classList.add('active');
        } else {
            throw new Error(result.message || 'Failed to send message');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        // Show email fallback banner
        showEmailFallback();
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message ✨';
    }
}

/**
 * Show email fallback banner when form submission fails
 */
function showEmailFallback() {
    const formContainer = document.querySelector('.contact-form-container');
    const successContainer = document.querySelector('.contact-success');

    // Hide form
    if (formContainer) formContainer.style.display = 'none';

    // Update success container to show email fallback
    if (successContainer) {
        successContainer.innerHTML = `
            <div class="contact-success-icon">📧</div>
            <h3>Couldn't send automatically</h3>
            <p>No worries! You can reach me directly at:</p>
            <a href="mailto:samarth@skilledca.in" class="email-banner">
                <span class="email-icon">✉️</span>
                <span class="email-text">samarth@skilledca.in</span>
            </a>
            <button class="btn-secondary" onclick="closeContactModal()" style="margin-top: 16px;">Close</button>
        `;
        successContainer.classList.add('active');
    }
}

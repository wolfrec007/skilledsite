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
    initAnalytics();
    initShareToast();
});

/**
 * Initialize Vercel Analytics
 */
function initAnalytics() {
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    const script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/insights/script.js';
    document.head.appendChild(script);
}



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

/* ================= SHARE BUTTON ================= */

/**
 * Share the current page using Web Share API or clipboard fallback
 */
function shareCurrentPage() {
    const shareData = {
        title: document.title,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch((err) => {
            // AbortError means the user cancelled – ignore silently.
            // For other errors fall back to clipboard copy.
            if (err && err.name !== 'AbortError') {
                copyToClipboardFallback();
            }
        });
    } else {
        copyToClipboardFallback();
    }
}

/**
 * Copy the current URL to clipboard, with a prompt fallback when the
 * Clipboard API is unavailable (non-HTTPS or permission denied).
 */
function copyToClipboardFallback() {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showShareToastMessage('🔗 Link copied to clipboard!');
        }).catch(() => {
            // Clipboard write was blocked – let the user copy manually
            window.prompt('Copy this link:', window.location.href);
        });
    } else {
        window.prompt('Copy this link:', window.location.href);
    }
}

let shareToastTimer = null;

/**
 * Show a toast notification with the given message
 */
function showShareToastMessage(message) {
    const toast = document.getElementById('shareToast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('visible');

    if (shareToastTimer) clearTimeout(shareToastTimer);
    shareToastTimer = setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

/**
 * Create share toast element in the DOM
 */
function initShareToast() {
    if (document.getElementById('shareToast')) return;
    const toast = document.createElement('div');
    toast.id = 'shareToast';
    toast.className = 'share-toast';
    document.body.appendChild(toast);
}

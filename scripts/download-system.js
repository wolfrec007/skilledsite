// Updated: 2026-02-01
/* ===============================================================
   SkilledCA - Reusable Download System with Lead Capture
   ===============================================================
   
   USAGE:
   1. Include this script in your page
   2. Add a download button with onclick="openDownloadModal(config)"
   3. Configure the download with your resource details and Google Drive link
   
   EXAMPLE:
   <button onclick="openDownloadModal({
       resourceName: 'Excel Master Shortcuts',
       resourceType: 'PDF Cheat Sheet',
       downloadUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'
   })">Download PDF</button>
   
   HOW TO GET GOOGLE DRIVE DOWNLOAD LINK:
   1. Upload PDF to Google Drive
   2. Right-click > Share > Anyone with link can view
   3. Copy the file ID from the share link (the long string after /d/)
   4. Use this format: https://drive.google.com/uc?export=download&id=FILE_ID
   =============================================================== */

// Global config for current download
let currentDownloadConfig = null;

/**
 * Open download modal with lead capture form
 * @param {Object} config - Download configuration
 * @param {string} config.resourceName - Name of the resource
 * @param {string} config.resourceType - Type (e.g., 'PDF Cheat Sheet')
 * @param {string} config.downloadUrl - Direct download URL (Google Drive or any URL)
 */
function openDownloadModal(config) {
    currentDownloadConfig = {
        resourceName: config.resourceName || 'Resource',
        resourceType: config.resourceType || 'PDF',
        downloadUrl: config.downloadUrl || '#'
    };

    const modal = document.getElementById('downloadModal');
    if (modal) {
        // Update modal title with resource name
        const titleEl = modal.querySelector('.download-modal-title');
        if (titleEl) {
            titleEl.textContent = `Download ${currentDownloadConfig.resourceName}`;
        }

        const subtitleEl = modal.querySelector('.download-modal-subtitle');
        if (subtitleEl) {
            subtitleEl.textContent = `Get your free ${currentDownloadConfig.resourceType} - just tell us a bit about yourself!`;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close download modal
 */
function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';

        // Reset form
        setTimeout(() => {
            const form = document.getElementById('downloadLeadForm');
            if (form) form.reset();

            // Reset to form view
            const formContainer = modal.querySelector('.download-form-container');
            const processingContainer = modal.querySelector('.download-processing');
            if (formContainer) formContainer.style.display = 'block';
            if (processingContainer) processingContainer.style.display = 'none';
        }, 300);
    }
}

/**
 * Initialize download modal event listeners
 */
function initDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeDownloadModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeDownloadModal();
            }
        });
    }

    // Initialize form submission
    const form = document.getElementById('downloadLeadForm');
    if (form) {
        form.addEventListener('submit', handleDownloadSubmit);
    }
}

// ============================================
// GOOGLE SHEETS CONFIGURATION
// Replace this URL with your Google Apps Script Web App URL
// ============================================
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwW0oj5gfzxI80BB_KI24fpkMZKU8GPAkNhmm-CHIWhFnbFfoYw0rRWzFlhI5bIH6nTrw/exec';

/**
 * Handle download form submission
 */
async function handleDownloadSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const modal = document.getElementById('downloadModal');
    const formContainer = modal.querySelector('.download-form-container');
    const processingContainer = modal.querySelector('.download-processing');
    const submitBtn = form.querySelector('.download-submit-btn');

    // Get form data
    const formData = {
        name: form.querySelector('#downloadName').value,
        email: form.querySelector('#downloadEmail').value,
        phone: form.querySelector('#downloadPhone').value,
        occupation: form.querySelector('#downloadOccupation').value,
        resource: currentDownloadConfig.resourceName,
        pageUrl: window.location.href
    };

    // Show processing state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    // Send to Google Sheets
    try {
        console.log('🚀 Sending data to Google Sheets...', formData);
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formData)
            });
            console.log('✅ Google Sheets request sent (no-cors)');
        } else {
            console.warn('⚠️ Google Script URL is missing or default.');
        }

        // Also store locally as backup
        const leads = JSON.parse(localStorage.getItem('skilledca_leads') || '[]');
        leads.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('skilledca_leads', JSON.stringify(leads));
    } catch (error) {
        console.error('❌ Lead storage error:', error);
    }

    // Switch to processing view
    formContainer.style.display = 'none';
    processingContainer.style.display = 'block';

    // Trigger download and redirect
    setTimeout(() => {
        triggerDownload();
    }, 500);
}

/**
 * Skip the form and download directly
 */
function skipDownloadForm() {
    const modal = document.getElementById('downloadModal');
    const formContainer = modal.querySelector('.download-form-container');
    const processingContainer = modal.querySelector('.download-processing');

    // Switch to processing view
    formContainer.style.display = 'none';
    processingContainer.style.display = 'block';

    // Trigger download
    setTimeout(() => {
        triggerDownload();
    }, 500);
}

/**
 * Trigger the actual download from Google Drive or other URL
 */
function triggerDownload() {
    const modal = document.getElementById('downloadModal');
    const processingText = modal.querySelector('.processing-text');

    // Update processing text
    if (processingText) {
        processingText.textContent = 'Starting your download...';
    }

    // Open download link in new tab/trigger download
    if (currentDownloadConfig.downloadUrl && currentDownloadConfig.downloadUrl !== '#') {
        // Create a hidden link and click it to trigger download
        const link = document.createElement('a');
        link.href = currentDownloadConfig.downloadUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Redirect to thank you page after a short delay
        setTimeout(() => {
            window.location.href = getThankYouUrl();
        }, 1500);
    } else {
        alert('Download link not configured. Please contact support.');
        closeDownloadModal();
    }
}

/**
 * Get thank you page URL based on current location
 */
function getThankYouUrl() {
    return '/ca/thank-you';
}

/**
 * Create and inject download modal HTML
 * Call this function to add the modal to any page
 */
function injectDownloadModal() {
    // Check if modal already exists
    if (document.getElementById('downloadModal')) return;

    const modalHTML = `
    <div class="modal-overlay" id="downloadModal">
        <div class="modal-content download-modal">
            <button class="modal-close" onclick="closeDownloadModal()">×</button>
            
            <!-- Form Container -->
            <div class="download-form-container">
                <div class="download-modal-header">
                    <div class="download-icon">📥</div>
                    <h2 class="download-modal-title">Download Resource</h2>
                    <p class="download-modal-subtitle">Get your free resource - just tell us a bit about yourself!</p>
                </div>
                
                <form id="downloadLeadForm" class="download-form">
                    <div class="form-group">
                        <label for="downloadName">Full Name *</label>
                        <input type="text" id="downloadName" name="name" required 
                               placeholder="Your full name">
                    </div>
                    
                    <div class="form-group">
                        <label for="downloadEmail">Email Address *</label>
                        <input type="email" id="downloadEmail" name="email" required 
                               placeholder="your@email.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="downloadPhone">Phone Number *</label>
                        <input type="tel" id="downloadPhone" name="phone" required 
                               placeholder="+91 98765 43210">
                    </div>
                    
                    <div class="form-group">
                        <label for="downloadOccupation">Occupation *</label>
                        <select id="downloadOccupation" name="occupation" required>
                            <option value="">Select your occupation</option>
                            <option value="CA">Chartered Accountant</option>
                            <option value="CA_Student">CA Student</option>
                            <option value="Accountant">Accountant</option>
                            <option value="Finance_Professional">Finance Professional</option>
                            <option value="Business_Owner">Business Owner</option>
                            <option value="Student">Student</option>
                            <option value="Developer">Developer/Tech</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="download-submit-btn">
                        📥 Download Now
                    </button>
                    
                    <p class="download-privacy-note">
                        🔒 Your information is safe with us. We'll only use it to send you helpful resources.
                    </p>
                    
                    <div class="download-skip-section">
                        <span class="skip-divider">or</span>
                        <button type="button" class="skip-download-btn" onclick="skipDownloadForm()">
                            Skip and download directly →
                        </button>
                    </div>
                </form>
            </div>
            
            <!-- Processing Container -->
            <div class="download-processing" style="display: none;">
                <div class="processing-spinner"></div>
                <p class="processing-text">Preparing your download...</p>
            </div>
        </div>
    </div>
    `;

    // Inject styles
    const styles = `
    <style id="downloadModalStyles">
        .download-modal {
            max-width: 400px;
            padding: 28px;
        }
        
        .download-modal-header {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .download-icon {
            font-size: 36px;
            margin-bottom: 10px;
        }
        
        .download-modal-title {
            font-size: 20px;
            font-weight: 700;
            margin: 0 0 4px;
            color: var(--text-primary, #fff);
        }
        
        .download-modal-subtitle {
            color: var(--text-secondary, #aaa);
            font-size: 13px;
            margin: 0;
        }
        
        .download-form .form-group {
            margin-bottom: 14px;
        }
        
        .download-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
            color: var(--text-primary, #fff);
            font-size: 13px;
        }
        
        .download-form input,
        .download-form select {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px;
            background: rgba(255,255,255,0.05);
            color: var(--text-primary, #fff);
            font-size: 14px;
            transition: all 0.3s ease;
        }
        
        .download-form input:focus,
        .download-form select:focus {
            outline: none;
            border-color: var(--accent-cyan, #06b6d4);
            background: rgba(255,255,255,0.08);
        }
        
        .download-form select option {
            background: #1a1a2e;
            color: #fff;
        }
        
        .download-submit-btn {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #10b981, #059669);
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 6px;
        }
        
        .download-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
        }
        
        .download-submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }
        
        .download-privacy-note {
            text-align: center;
            font-size: 11px;
            color: var(--text-secondary, #888);
            margin-top: 12px;
        }
        
        .download-skip-section {
            text-align: center;
            margin-top: 14px;
            padding-top: 14px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        .skip-divider {
            display: block;
            color: var(--text-secondary, #666);
            font-size: 12px;
            margin-bottom: 8px;
        }
        
        .skip-download-btn {
            background: none;
            border: none;
            color: var(--accent-cyan, #06b6d4);
            font-size: 14px;
            cursor: pointer;
            text-decoration: underline;
            transition: all 0.3s ease;
        }
        
        .skip-download-btn:hover {
            color: var(--accent-green, #10b981);
        }
        
        .download-processing {
            text-align: center;
            padding: 60px 20px;
        }
        
        .processing-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255,255,255,0.1);
            border-top-color: var(--accent-cyan, #06b6d4);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .processing-text {
            color: var(--text-secondary, #aaa);
            font-size: 16px;
        }
    </style>
    `;

    // Add styles to head
    document.head.insertAdjacentHTML('beforeend', styles);

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Initialize event listeners
    initDownloadModal();
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Inject modal if a download button exists on the page
    if (document.querySelector('[data-download-resource]') ||
        document.querySelector('.download-pdf-btn')) {
        injectDownloadModal();
    }
});

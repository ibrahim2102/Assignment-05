// Heart Count
let heartCount = 0;
const heartCountSpan = document.getElementById('heart-count');

document.querySelectorAll('.heart-btn').forEach(function(heart) {
    heart.addEventListener('click', function(e) {
        // Toggle
        heart.classList.toggle('text-red-500');

        if (heart.classList.contains('text-red-500')) {
            heartCount++;
        }
        // Update heart count
        heartCountSpan.textContent = heartCount;
    });
});


// Call Button


// Coin System
let currentCoins = 100;

const coinDisplay = Array.from(document.querySelectorAll('span')).find(span => 
    span.textContent === '100' && 
    span.closest('.border-2.border-\\[\\#41FF6B19\\]')
);

function updateCoinDisplay() {
    if (coinDisplay) {
        coinDisplay.textContent = currentCoins;
    }
}

// Initialize coin display
updateCoinDisplay();

// Copy System
let copyCount = 0;
const copyCountSpan = document.querySelector('.border-2.border-\\[\\#00A63E\\] span');

function updateCopyCount() {
    if (copyCountSpan) {
        copyCountSpan.textContent = copyCount;
    }
}

// Initialize copy count
updateCopyCount();

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    // Select the text
    textArea.focus();
    textArea.select();
    
    // Copy the text
    document.execCommand('copy');
    
    // Remove the temporary element
    document.body.removeChild(textArea);
    
    return true;
}

// Copy Button Functionality
document.querySelectorAll('.border-2.border-gray-300.bg-white').forEach(function(copyBtn) {
    copyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        
        const card = copyBtn.closest('.service-card');
        const phoneNumberElement = card.querySelector('.phone-number');
        const phoneNumber = phoneNumberElement ? phoneNumberElement.textContent : 'Unknown';
        
        // Copy to clipboard
        copyToClipboard(phoneNumber);
        
        // Increment copy count
        copyCount++;
        updateCopyCount();
        
        // Show success alert
        alert('Copied! Phone number "' + phoneNumber + '" has been copied to clipboard.\nTotal copies: ' + copyCount);
        
        // console.log('Copy attempted for: ' + phoneNumber);
    });
});

// Call History System
const callHistoryContainer = document.getElementById('call-history-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');


function addCallToHistory(serviceName, phoneNumber) {
    const callTime = new Date();
    const timeString = callTime.toLocaleTimeString();
    
    const callHistoryItem = document.createElement('div');
    callHistoryItem.className = 'bg-white rounded-lg p-4 shadow-sm border border-gray-200';
    callHistoryItem.innerHTML = `
        <div class="flex justify-between items-start">
            <div class="flex-1">
                <div class="font-semibold text-gray-800">${serviceName}</div>
                <div class="text-green-600 font-medium">${phoneNumber}</div>
            </div>
            <div class="text-gray-500 text-sm font-medium ml-3">
                ${timeString}
            </div>
        </div>
    `;
    
    
    callHistoryContainer.insertBefore(callHistoryItem, callHistoryContainer.firstChild);
}

// Clear history functionality
clearHistoryBtn.addEventListener('click', function() {
    callHistoryContainer.innerHTML = '';
});

// Call Button Functionality
document.querySelectorAll('.call-btn').forEach(function(callBtn) {
    callBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        
        if (currentCoins < 20) {
            alert('Insufficient coins! You need at least 20 coins to make a call. Current coins: ' + currentCoins);
            return;
        }
        
        
        currentCoins -= 20;
        updateCoinDisplay();
        
        
        const card = callBtn.closest('.service-card');
        const serviceName = card.querySelector('h1').textContent;
        
        
        const phoneNumberElement = card.querySelector('.phone-number');
        const phoneNumber = phoneNumberElement ? phoneNumberElement.textContent : 'Unknown';
        
        // Add call to history
        addCallToHistory(serviceName, phoneNumber);
        
        // Show success alert with phone number
        alert(`Call initiated for ${serviceName}!\nPhone Number: ${phoneNumber}\n20 coins deducted. Remaining coins: ${currentCoins}`);
        
    
    });
});
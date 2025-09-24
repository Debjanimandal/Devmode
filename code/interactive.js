// interactive.js - Chat and FAQ functions

// Show chat and hide channels
function showChat(channel) {
    const chatSection = document.getElementById('chatSection');
    const channelName = document.getElementById('channelName');
    const channelsSection = document.querySelector('.channels-section');

    if (!chatSection || !channelName || !channelsSection) {
        console.error('Chat or channel section missing');
        return;
    }

    // Update chat header
    channelName.textContent = channel + " Chat";

    // Hide channels, show chat
    channelsSection.style.display = 'none';
    chatSection.classList.add('active');
}

// Go back to channels and hide chat
function goBackToChannels() {
    const chatSection = document.getElementById('chatSection');
    const channelsSection = document.querySelector('.channels-section');

    if (!chatSection || !channelsSection) return;

    chatSection.classList.remove('active');
    channelsSection.style.display = 'block';
}

// Toggle FAQ answers
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const arrow = document.getElementById('arrow-' + id.split('-')[1]);

    if (!answer || !arrow) {
        console.error('Error: answer or arrow missing for id:', id);
        return;
    }

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
    } else {
        answer.style.display = 'block';
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
    }
}

// Initialize FAQ answers as hidden
document.addEventListener('DOMContentLoaded', () => {
    ['answer-1', 'answer-2', 'answer-3'].forEach(id => {
        const answer = document.getElementById(id);
        if (answer) {
            answer.style.display = 'none';
        }
    });
});

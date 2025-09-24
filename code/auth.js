// auth.js - Authentication modal functions

// These functions need to be global for onclick attributes
function showModal(tab) {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'flex';
        switchTab(tab);
        console.log('Modal opened:', tab);
    } else {
        console.error('Error: authModal not found');
    }
}

function hideModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
}

function switchTab(tab) {
    const signupTab = document.getElementById('signup-tab');
    const signinTab = document.getElementById('signin-tab');
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    
    if (signupTab && signinTab && signupForm && signinForm) {
        if (tab === 'signup') {
            signupTab.classList.add('active');
            signinTab.classList.remove('active');
            signupForm.classList.add('active');
            signinForm.classList.remove('active');
        } else {
            signupTab.classList.remove('active');
            signinTab.classList.add('active');
            signupForm.classList.remove('active');
            signinForm.classList.add('active');
        }
    } else {
        console.error('Error: Modal tabs or forms not found');
    }
}

function handleSignup() {
    const username = document.getElementById('signup-username')?.value;
    const email = document.getElementById('signup-email')?.value;
    const password = document.getElementById('signup-password')?.value;
    const confirmPassword = document.getElementById('confirm-password')?.value;
    
    if (username && email && password && confirmPassword) {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert('Sign-up successful! Welcome, ' + username);
        // Note: Using localStorage in this context is just for demo
        // In a real app, you'd send this to a server
        localStorage.setItem('user_' + email, JSON.stringify({ username, password }));
        window.location.href = 'home.html?username=' + encodeURIComponent(username);
    } else {
        alert('Please fill in all fields.');
    }
}

function handleSignin() {
    const email = document.getElementById('signin-email')?.value;
    const password = document.getElementById('signin-password')?.value;
    
    if (email && password) {
        const userData = localStorage.getItem('user_' + email);
        if (userData) {
            const user = JSON.parse(userData);
            if (user.password === password) {
                alert('Sign-in successful! Welcome back, ' + user.username);
                window.location.href = 'home.html?username=' + encodeURIComponent(user.username);
            } else {
                alert('Incorrect password.');
            }
        } else {
            alert('No account found with this email.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}
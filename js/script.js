document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'flex';
});

document.getElementById('signInBtn').addEventListener('click', function() {
    document.getElementById('signInModal').style.display = 'flex';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
    if (event.target == document.getElementById('signInModal')) {
        document.getElementById('signInModal').style.display = 'none';
    }
}

document.getElementById('createAccountLink').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signInModal').style.display = 'flex';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('signInModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'flex';
});

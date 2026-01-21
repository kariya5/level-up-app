(function() {
    const PATH = window.location.pathname;
    const PAGE = PATH.split("/").pop();

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // If on login page, redirect to index if already logged in
    if (PAGE === 'login.html') {
        if (isLoggedIn) {
            window.location.href = 'index.html';
        }
        return;
    }

    // If on any other page, redirect to login if NOT logged in
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
})();

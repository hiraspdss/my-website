// Function to load page content dynamically
function loadPage(page) {
    console.log(page)
    fetch(`pages/${page}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main_content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load default page
window.onload = function() {
    loadPage('index.html');
};

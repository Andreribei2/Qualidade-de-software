document.getElementById('reveal-button').addEventListener('click', function() {
    const extraContent = document.getElementById('extra-content');
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
    } else {
        extraContent.style.display = 'none';
    }
});


document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.preventDefault(); 
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
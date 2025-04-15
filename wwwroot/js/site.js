// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var sidenav = document.querySelector(".side-nav")


function shownav() {
    sidenav.style.display = "block";
}

function closenav() {
    sidenav.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function () {
    lottie.loadAnimation({
        container: document.getElementById('lottie-compass'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/lottie-compass.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('lottie-car'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/lottie-car.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('lottie-flight'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/lottie-flight.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('lottie-man'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/lottie-man.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('lottie-globe'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/lottie-globe.json'
    });
});



//document.addEventListener('DOMContentLoaded', function () {
//    const searchBar = document.getElementById('searchBar');
//    const cards = document.querySelectorAll('.package-card');

//    searchBar.addEventListener('input', function () {
//        const searchText = this.value.toLowerCase();

//        cards.forEach(card => {
//            const location = card.getAttribute('data-location').toLowerCase();
//            const title = card.querySelector('.card-title').innerText.toLowerCase();

//            if (location.includes(searchText) || title.includes(searchText)) {
//                card.style.display = '';
//            } else {
//                card.style.display = 'none';
//            }
//        });
//    });
//});

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const cards = document.querySelectorAll('.package-card');
    const headings = document.querySelectorAll('h4'); // Selects all <h4> elements

    searchBar.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();

        // Hide all <h4> tags when search is active
        if (searchText.trim() !== '') {
            headings.forEach(h4 => h4.style.display = 'none');
        } else {
            headings.forEach(h4 => h4.style.display = '');
        }

        cards.forEach(card => {
            const location = card.getAttribute('data-location').toLowerCase();
            const title = card.querySelector('.card-title').innerText.toLowerCase();

            if (location.includes(searchText) || title.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


//form


    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                const isEmpty = !field.value || field.value.trim() === '' || field.value === 'Choose mode of transport';
    if (isEmpty) {
        field.classList.add('is-invalid');
    isValid = false;
                } else {
        field.classList.remove('is-invalid');
    field.classList.add('is-valid');
                }
            });

    if (!isValid) {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Form',
            text: 'Please fill in all required fields.',
            confirmButtonColor: '#d33'
        });
    return;
            }

    // ✅ SweetAlert2 success popup
    Swal.fire({
        icon: 'success',
    title: 'Booking Submitted!',
    text: 'We will contact you as soon as possible. Thank you for choosing us!',
    confirmButtonColor: '#3085d6'
            });

    // Optionally reset form after submission
    form.reset();
            requiredFields.forEach(field => field.classList.remove('is-valid'));
        });
    });












    






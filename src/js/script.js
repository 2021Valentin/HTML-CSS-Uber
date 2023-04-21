window.addEventListener('DOMContentLoaded', () => {
    // First variant
    const menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.hamburger'),
        menuItem = document.querySelectorAll('.menu_item');  

    hamburger.addEventListener('click', (e) => {
        if (hamburger.classList.contains('hamburger_active')) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    menuItem.forEach(element => {
        element.addEventListener('click', (e) => {
            hideMenu();
        });
    });

    function showMenu() {
        menu.classList.add('menu_active')
        hamburger.classList.add('hamburger_active')
    }

    function hideMenu() {
        menu.classList.remove('menu_active')
        hamburger.classList.remove('hamburger_active')
    }

    // Second variant
    // const menu = document.querySelector('.menu'),
    //     hamburger = document.querySelector('.hamburger'),
    //     menuItem = document.querySelectorAll('.menu_item');
    // hamburger.addEventListener('click', (e) => {
    //     hamburger.classList.toggle('hamburger_active');
    //     menu.classList.toggle('menu_active');
    // });
    // menuItem.forEach(item => {
    //     item.addEventListener('click', (e) => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //     });
    // })
});


export function initializeMenu() {
    const menuButtons = document.querySelectorAll('.menu_button');
    const cakeMenus = document.querySelectorAll('.menu_of_cakes');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuName = button.getAttribute('data-menu-name');
            cakeMenus.forEach(menu => {
                menu.classList.add('d-none');
            });
            const selectedMenu = document.querySelector(`.menu_of_cakes.${menuName}`);
            if (selectedMenu) {
                selectedMenu.classList.remove('d-none');
            }
        });
    });
}
export function toggleOverlay(button) {
    const overlay = button.closest('.menu_cake').querySelector('.recipe_container');
    overlay.style.display = overlay.style.display === 'none' || overlay.style.display === '' ? 'block' : 'none';
}
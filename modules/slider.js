export function initializeSlider() {
    let offset = 0;
    const sliderLine = document.querySelector('.slider_line_header');

    document.querySelectorAll('#hit_btn_right').forEach(button => {
        button.addEventListener('click', function() {
            offset = (offset + 201) % 603; // Assuming 2 elements of 201px width
            sliderLine.style.left = -offset + 'px';
        });
    });

    document.querySelectorAll('#hit_btn_left').forEach(button => {
        button.addEventListener('click', function() {
            offset = (offset - 201 + 603) % 603; // Looping back
            sliderLine.style.left = -offset + 'px';
        });
    });

    document.querySelectorAll('.menu_of_cakes').forEach(menu => {
        let offset = 0;
        const sliderLine = menu.querySelector('.slider_line');

        menu.querySelector('.button_right').addEventListener('click', function() {
            offset = (offset + 376) % 1129; // Assuming 3 elements of 376px width
            sliderLine.style.left = -offset + 'px';
        });

        menu.querySelector('.button_left').addEventListener('click', function() {
            offset = (offset - 375 + 1129) % 1129; // Looping back
            sliderLine.style.left = -offset + 'px';
        });
    });
}
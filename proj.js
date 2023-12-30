
function toggleColors() {
    document.body.classList.toggle('inverted');
    const textElements = document.querySelectorAll('.colorText');
    textElements.forEach(element => {
        element.classList.toggle('inverted');
    });
}



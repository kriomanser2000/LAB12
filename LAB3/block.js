const colorBoxes = document.querySelectorAll('.color-box');
    const textElement = document.getElementById('text');
    colorBoxes.forEach(colorBox => 
    {
        colorBox.addEventListener('click', () => 
        {
            const color = colorBox.dataset.color;
            textElement.style.color = color;
        });
    });
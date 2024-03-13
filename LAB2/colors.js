document.addEventListener('DOMContentLoaded', function() 
{
    const container = document.getElementById('container');
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function()
    {
        const randomColor = getRandomColor();
        const block = createBlock(randomColor);
        container.appendChild(block);
        block.addEventListener('click', function() 
        {
            container.removeChild(block);
        });
    });
    function createBlock(color) 
    {
        const block = document.createElement('div');
        block.className = 'block';
        block.style.backgroundColor = color;
        return block;
    }
    function getRandomColor() 
    {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) 
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
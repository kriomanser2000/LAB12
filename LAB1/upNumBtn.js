var numberInput = document.getElementById("numberInput");
    function increment() 
    {
        var currentValue = parseInt(numberInput.value);
        numberInput.value = currentValue + 1;
    }
    function decrement() {
        var currentValue = parseInt(numberInput.value);
        numberInput.value = currentValue - 1;
    }
var countries = 
[
    "Україна",
    "Польща",
    "США",
    "Німеччина",
    "Франція",
    "Італія",
    "Велика Британія",
    "Австрія",
    "Швейцарія",
    "Шотландія"
];
var inputField = document.getElementById("country-input");
var suggestionsList = document.getElementById("suggestions-list");
function showSuggestions() 
{
    var inputText = inputField.value.toLowerCase();
    var matchedCountries = countries.filter(function(country) 
    {
        return country.toLowerCase().startsWith(inputText);
    });
    suggestionsList.innerHTML = "";
    matchedCountries.slice(0, 10).forEach(function(country) 
    {
        var listItem = document.createElement("li");
        listItem.textContent = country;
        listItem.onclick = function() 
        {
            inputField.value = country;
            suggestionsList.style.display = "none";
        };
        suggestionsList.appendChild(listItem);
    });
    if(matchedCountries.length > 0) 
    {
        suggestionsList.style.display = "block";
    } 
    else 
    {
        suggestionsList.style.display = "none";
    }
}
inputField.addEventListener("input", showSuggestions);
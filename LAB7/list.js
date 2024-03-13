window.onscroll = function() {scrollFunction()};
function scrollFunction() 
{
    if (document.body.scrollUp > 100 || document.documentElement.scrollUp > 100) 
    {
        document.getElementById("scrollUpBtn").style.display = "block";
    } 
    else 
    {
        document.getElementById("scrollUpBtn").style.display = "none";
    }
}
function scrollUp() 
{
    document.body.scrollUp = 0;
    document.documentElement.scrollUp = 0;
}
var css = document.querySelector(".heading-primary--sub2");
var color1 = document.getElementById("Color1");
var color2 = document.getElementById("Color2");
var bodyBackground = document.getElementById("Background");

function setGradient()
{
    bodyBackground.style.background = 
    "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = bodyBackground.style.background +  ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
if(window.localStorage.nb != 2)
{
    window.localStorage.nb = 1;
}

nb = window.localStorage.nb;

function chargement()
{
    document.getElementById("chargement").style.display = "none";
}

function changecss(nb)
{
    document.getElementById("pagestyle").setAttribute("href", "../css/loisirs"+nb+".css");
}

window.onload = function() { chargement(); changecss(nb) };
if(window.localStorage.nb != 2)
{
    window.localStorage.nb = 1;
}

nb = window.localStorage.nb;

function JingleBells()
{
    let son = new Audio("audio/son_innocent.mp3");
    son.volume = 0.2;
    son.play();
}

function chargement()
{
    document.getElementById("chargement").style.display = "none";
}

function cocher()
{
    if (nb == 1) {
        document.getElementById("radio2").checked = false;
        document.getElementById("radio1").checked = true;
    } else {
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = true;
    }
}

function switchcss (nb)
{
    if (nb == 1 && document.getElementById("radio1").checked)
    {
        JingleBells();
        window.localStorage.nb = 2;
    } else if (nb == 2 && document.getElementById("radio2").checked)
    {
        JingleBells();
        window.localStorage.nb = 1;
    }
    return window.localStorage.nb;
}

function changecss(nb)
{
    document.getElementById("pagestyle").setAttribute("href", "css/index"+nb+".css");
    cocher();
}


function konami()
{
    // Les touches autorisées
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };

// La sequence à reproduire pour activer le Konami Code
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// Contient la position atteinte dans la séquence
    var konamiCodePosition = 0;

// Ecoute les entrées clavier
    document.addEventListener('keydown', function(e) {
        // Récupère la valeur de la touche
        var key = allowedKeys[e.keyCode];
        // Récupère la valeur de la clé nécéssaire à la position actuelle
        var requiredKey = konamiCode[konamiCodePosition];

        // Si la touche appuyé est celle qui est demandée, on continue
        if (key == requiredKey) {

            // Avance d'une position dans la séquence demandée
            konamiCodePosition += 1;

            // Si on arrive à la dernière touche on lance la fonction pour changer de style
            if (konamiCodePosition == konamiCode.length) {
                changecss(nb=switchcss(nb));
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });
}
window.onload = function() { chargement(); changecss(nb); konami() };
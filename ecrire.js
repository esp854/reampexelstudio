// Effet machine à écrire
let i = 0;
let txt = 'Développeur et Artiste'; /* Le texte à afficher */
let speed = 150; /* La vitesse de frappe (en millisecondes) */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter; // Démarre l'effet à la charge de la page

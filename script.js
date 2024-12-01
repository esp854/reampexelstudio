document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1200, // Durée des animations
      once: true,     // Animation jouée une seule fois
    });
  });
  
  // Initialisation de AOS (animations on scroll)
AOS.init();

// Filtrage des projets
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
// Modal (Popup)
const viewMoreBtns = document.querySelectorAll('.view-more');
const modal = document.getElementById('project-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.querySelector('.close-btn');

// Fonction d'ouverture du modal
viewMoreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const projectCard = e.target.closest('.project-card');
    const title = projectCard.querySelector('h3').textContent;
    const description = projectCard.querySelector('p').textContent;
    const imageUrl = projectCard.querySelector('.project-image').style.backgroundImage.slice(5, -2);
    
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageUrl;
    modalLink.href = '#'; // Remplacer par le lien réel du projet
    modal.style.display = 'flex';
  });
});

// Fonction de fermeture du modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fermeture du modal en cliquant en dehors de celui-ci
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

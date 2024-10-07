
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Calcule une translation vers la droite pour 'mars' et 'future'
        document.querySelectorAll('.mars, .future').forEach(function(el) {
            el.style.transform = `translateX(${scrollTop * 0.5}px)`; // Translation vers la droite
        });

        // Calcule une translation vers la gauche pour 'crypto' et 'elon'
        document.querySelectorAll('.crypto, .elon').forEach(function(el) {
            el.style.transform = `translateX(${-scrollTop * 0.5}px)`; // Translation vers la gauche
        });
    });

    // Fonction pour gérer l'effet de parallaxe
    function parallaxEffect() {
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(el => {
            const speed = 0.5; // Ajustez la vitesse ici, 0.5 signifie qu'il défile deux fois plus lentement
            const yPos = window.scrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Ajout d'un écouteur d'événements pour le défilement
    window.addEventListener('scroll', parallaxEffect);


  var swiper = new Swiper('.swiper.is-sp-content', {
    slidesPerView: 1,              // Nombre de slides visibles
    spaceBetween: 30,              // Espacement entre les slides
    effect: 'fade',                // Effet de fondu (fade effect)
    loop: true,                    // Boucle continue des slides
    autoplay: {                    // Activation de l'autoplay
      delay: 3000,                 // Délai entre les transitions (3 secondes)
      disableOnInteraction: false, // Ne pas désactiver l'autoplay quand l'utilisateur interagit
    },
    
    navigation: {                  // Flèches de navigation
      nextEl: '.sp_slider-arrow-character.is-next',
    },
  });


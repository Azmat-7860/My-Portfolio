let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
// profile card sec 

    var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


//   typing effect 
  const textElement = document.getElementById('text');
  const cursorElement = document.getElementById('cursor');
  const words = ['Web Devloper;', 'Programer;', 'Coder;'];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false; // Flag to track if characters are being deleted
  let interval;

  function updateText() {
    const word = words[currentWordIndex];
    const currentText = textElement.textContent;

    if (!isDeleting) {
      // Typing characters
      textElement.textContent = word.substring(0, currentCharIndex);
      currentCharIndex++;

      if (currentCharIndex > word.length) {
        // Start deleting characters
        isDeleting = true;
        clearInterval(interval);
        interval = setInterval(updateText, 200); // Speed up deletion
      }
    } else {
      // Deleting characters
      textElement.textContent = word.substring(0, currentCharIndex);
      currentCharIndex--;

      if (currentCharIndex === 0) {
        // Done deleting, move to the next word
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        clearInterval(interval);
        interval = setInterval(updateText, 300); // Resume typing speed
      }
    }
  }

  function startTyping() {
    clearInterval(interval); // Clear any existing interval
    interval = setInterval(updateText, 200); // Type speed: 200 milliseconds per character
  }

  startTyping(); // Start typing initially

  // Restart typing when the window is focused
  window.addEventListener('focus', startTyping);

  // contact section 
  function sendWhatsApp(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const whatsappMessage = `Here are my details:\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;


    const whatsappUrl = `https://api.whatsapp.com/send?phone=+918763480617&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// dark theme and light theme 

  const themeToggleButton = document.getElementById('theme-toggle');
  const bodyElement = document.body;

  themeToggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme'); // Toggle the dark-theme class
    if (bodyElement.classList.contains('dark-theme')) {
      themeToggleButton.textContent = 'Switch to Light Theme'; // Change button text
    } else {
      themeToggleButton.textContent = 'Switch to Dark Theme'; // Revert to default text
    }
  });



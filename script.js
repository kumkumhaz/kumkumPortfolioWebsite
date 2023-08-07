
// LIGHT AND DARK MODE
// JavaScript code
let lightMode = document.getElementsByClassName("lightMode")[0];
let darkMode = document.getElementsByClassName("darkMode")[0];
const toggleThemeButton = document.getElementById('darkLightMode');
const themeStyle = document.getElementById('theme-style');

function switchTheme(theme) {
  if (theme === 'light') {
    themeStyle.setAttribute('href', 'lightMode.css');
    lightMode.style.display = 'block';
    darkMode.style.display = 'none';
  } else {
    themeStyle.setAttribute('href', 'darkMode.css');
    lightMode.style.display = 'none';
    darkMode.style.display = 'block';
  }
}

toggleThemeButton.addEventListener('click', () => {
  const currentTheme = themeStyle.getAttribute('href') === 'darkMode.css' ? 'light' : 'dark';
  switchTheme(currentTheme);
  localStorage.setItem('currentTheme', currentTheme);
});

// Initial theme setup
const storedTheme = localStorage.getItem('currentTheme');
if (storedTheme) {
  switchTheme(storedTheme);
} else {
  switchTheme('dark');
}

// hemburger

const burger = document.querySelector('.burger');
const menuitems = document.querySelector('.menuitems');
const closeicon = document.getElementById('closeicon');
const navbar = document.querySelector('.navbar');
let menuOpen = false;

function showMenuItems() {
  menuitems.style.display = "block";
  closeicon.style.display = "block";
  burger.style.display = "none";
  menuOpen = true;
}

function closeMenuItems() {
  menuitems.style.display = "none";
  closeicon.style.display = "none";
  burger.style.display = "block";
  menuOpen = false;
}

burger.addEventListener("click", showMenuItems);
closeicon.addEventListener("click", closeMenuItems);

// Scroll to section and then hide menu items
menuitems.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    if (window.innerWidth <= 1000) {
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        closeMenuItems();
      }
    }
  });
});


const typingText = document.querySelector('.typing');
const professions = ['Front End Developer', 'Mechanical Engineer'];
let professionIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < professions[professionIndex].length) {
    typingText.textContent += professions[professionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200); 
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = professions[professionIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100); 
  } else {
    professionIndex = (professionIndex + 1) % professions.length;
    setTimeout(type, 500); 
  }
}

document.addEventListener('DOMContentLoaded', type);



//// HEADINGS ANIMATION


document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.headings');
  
    function handleScroll() {
      const windowHeight = window.innerHeight;
  
      headings.forEach(heading => {
        const section = heading.closest('section');
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < windowHeight /1.8) {
          heading.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  



  const scriptURL = 'https://script.google.com/macros/s/AKfycbylBxwvqK3awP9ErvmEODBZCoscrGkS3UXSraxMRhsp7cXm6tSDwQntOoRjlhEawFLg/exec'
  const form = document.forms['submit-to-google-sheet']
  const messagesuccess = document.getElementById("messagesuccess")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        messagesuccess.innerHTML = "Message sent successfully";
          setTimeout(function(){
            messagesuccess.innerHTML = "";
          },3000)
          form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

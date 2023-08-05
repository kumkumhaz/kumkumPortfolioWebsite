
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
  // Save the current theme preference to local storage
  localStorage.setItem('currentTheme', currentTheme);
});

// Initial theme setup
const storedTheme = localStorage.getItem('currentTheme');
if (storedTheme) {
  switchTheme(storedTheme);
} else {
  // If no theme preference is set, default to dark mode
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

// close hemburger
closeicon.addEventListener("click", closeMenuItems);

// Event listener to close menu items when clicking outside (only if menu items are open)
document.addEventListener("click", function (event) {
  const target = event.target;
  if (menuOpen && !menuitems.contains(target) && target !== burger && !burger.contains(target)) {
    closeMenuItems();
  }
});



const typingText = document.querySelector('.typing');
const professions = ['Front End Developer', 'Mechanical Engineer'];
let professionIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < professions[professionIndex].length) {
    typingText.textContent += professions[professionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200); // Adjust the typing speed here (milliseconds)
  } else {
    setTimeout(erase, 2000); // Adjust the delay before erasing (milliseconds)
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = professions[professionIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100); // Adjust the erasing speed here (milliseconds)
  } else {
    professionIndex = (professionIndex + 1) % professions.length;
    setTimeout(type, 500); // Adjust the delay before typing the next profession (milliseconds)
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

const body = document.documentElement,
input = document.getElementById('input'),
btnNotify = document.getElementById('btnNotify'),
light = document.getElementById('themeSun'),
dark = document.getElementById('themeMoon');
error = document.getElementById('emailError');

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const popUp = document.getElementById('popUp');
const loadBar = document.getElementById('loadBar');

const regex = /[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-z]{2,6}/i; 

let bool = false;

const validateEmail = () => {
  input.addEventListener('keyup', (e) => {
    let valueEmail = input.value;
    if(regex.test(valueEmail)) {
      e.target.style.border = '2px solid #47d964';   
      e.target.style.outline = '.2px solid #47d964';   
      error.classList.add('d-none');
      bool = true;
    } else {
      e.target.style.border = '2px solid #f00'; 
      e.target.style.outline = '.2px solid #f00'; 
      error.textContent = "Please enter a valid email";
      error.style.fontWeight = 'bold';
      error.classList.remove('d-none');
      bool = false;
    }  
  });
}

btnNotify.addEventListener('click', (e) => {
  e.preventDefault();
  validateEmail();
  if(bool === true){
    input.value = '';
    error.classList.add('d-none');
    input.style.border = '2px solid rgba(189, 189, 189, 0.681)';
    input.style.outline = 'none';
    setTimeout(() => {
      popUp.style.right = '-17em';  // Hide popup after 5 seconds
    }, 5000);
    popUp.style.right = '1em'; 
    // loadBar.style.width = '0%';
    loadBar.style.marginLeft= '-34em';
  }
  bool = false;
});


light.addEventListener('click', () => {
  body.style.backgroundColor = 'white';

  header.classList.remove('dark');
  header.classList.add('light');

  main.classList.remove('dark');
  main.classList.add('light');

  footer.classList.remove('dark');
  footer.classList.add('light');

  dark.style.color= 'black';

  light.classList.add('d-none');
  dark.classList.remove('d-none');
});

dark.addEventListener('click', () => {
  body.style.backgroundColor = 'black';

  header.classList.remove('light');
  header.classList.add('dark');

  main.classList.remove('light');
  main.classList.add('dark');

  footer.classList.remove('light');
  footer.classList.add('dark');

  light.style.color = 'white';

  dark.classList.add('d-none');
  light.classList.remove('d-none');

});

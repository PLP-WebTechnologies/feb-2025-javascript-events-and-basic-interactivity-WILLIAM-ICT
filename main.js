// Button Click
document.getElementById('clickBtn').addEventListener('click', function() {
  alert('Button clicked!');
});

// Hover Effect
document.getElementById('hoverDiv').addEventListener('mouseenter', function() {
  this.style.backgroundColor = 'lightcoral';
});
document.getElementById('hoverDiv').addEventListener('mouseleave', function() {
  this.style.backgroundColor = 'lightblue';
});

// Keypress Detection
document.getElementById('keypressInput').addEventListener('keyup', function() {
  console.log('You typed: ' + this.value);
});

// Secret Action: Double click or long press
let secretBox = document.getElementById('secretAction');
let timer;
secretBox.addEventListener('dblclick', function() {
  alert('You double-clicked me!');
});
secretBox.addEventListener('mousedown', function() {
  timer = setTimeout(function() {
    alert('Long press detected!');
  }, 1000); // 1 second long press
});
secretBox.addEventListener('mouseup', function() {
  clearTimeout(timer);
});

// Button to Change Text or Color
document.getElementById('changeBtn').addEventListener('click', function() {
  this.innerHTML = 'Text Changed!';
  this.style.backgroundColor = 'lightgreen';
});

// Image Gallery
let galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(function(img) {
  img.addEventListener('click', function() {
    alert('You clicked an image!');
  });
});

// Tabs
let tabButtons = document.querySelectorAll('.tab-btn');
let tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let tabNum = this.getAttribute('data-tab');
    tabContents.forEach(function(tab) {
      tab.classList.remove('active');
    });
    document.getElementById('tab' + tabNum).classList.add('active');
  });
});

// Form Validation
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
    document.getElementById('formFeedback').innerText = 'All fields are required!';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('formFeedback').innerText = 'Please enter a valid email.';
  } else if (password.length < 8) {
    document.getElementById('formFeedback').innerText = 'Password must be at least 8 characters.';
  } else {
    document.getElementById('formFeedback').innerText = 'Form submitted successfully!';
  }
});

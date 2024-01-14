let words = document.querySelector('.typing').textContent.split(' ');
document.querySelector('.typing').textContent = '';

words.forEach((word, index) => {
  setTimeout(() => {
      document.querySelector('.typing').innerHTML += `${word} `;
  }, 300 * index);
});

window.onload = function() {
   var typed = new Typed(".typing", {
       strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
   });
};



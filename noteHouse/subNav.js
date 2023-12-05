


function changeLinks() {
    var subject = localStorage.getItem('subject');
    var chapterLink = document.getElementById('sec-1');
    var syllabusLink = document.getElementById('sec-2');
    var questionLink = document.getElementById('sec-3');
    var solutionLink = document.getElementById('sec-4');
    
    chapterLink.href = subject + '1.html';
    syllabusLink.href = subject + '2.html';
    questionLink.href = subject + '3.html';
    solutionLink.href = subject + '4.html';

    loadContent(chapterLink.href, 'content');
 }
 
 window.onload = changeLinks;
 


     function loadContent(url, elementId) {
         fetch(url)
             .then(response => response.text())
             .then(data => {
                document.getElementById(elementId).innerHTML = data;
             });
     }

     // Load the content of the 'chapters' section by default
    //  loadContent(chap , 'content');

     // When a link is clicked, load the content of the corresponding section
     document.querySelectorAll('nav ul li a').forEach(link => {
         link.addEventListener('click', function(event) {
             event.preventDefault(); // Prevent the default action of the hyperlink
             loadContent(this.href, 'content');
         });
     });
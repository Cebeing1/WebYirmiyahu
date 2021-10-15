document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
          document.getElementById('navbar_top').classList.add('navbar-stuck');
          // add padding top to show content behind navbar
          //navbar_height = document.querySelector('.navbar').offsetHeight;
          //document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('navbar-stuck');
           // remove padding top from body
          //document.body.style.paddingTop = '0';
        } 
    });
  }); 
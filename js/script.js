
$(document).ready( () => {

  if ($(window).width()>768){ //Désactivation de JS sur l'affichage mobile


// PAGE FADE IN
  $('.section-hello, .nav-list').hide();
  $('.section-hello').fadeIn(1000);
  $('.profil').animate({
    top: '200px',
  }, 2000);
  $('.main-text').animate({
    top: '50px',
  }, 2000);
  $('.nav-list').fadeIn(3000);

// SCROLL TO # BUTTONS
  $('.nav-list a').on('click', function(e) {

    //TO PREVENT DEFAULT BEHAVIOR OF BROWSER
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
      }, 1000, function(){
        window.location.hash = this.hash;
    });

    //FADE IN OF THE FORM
    if(this.hash == '#contact') {
      $('.form-group-form').hide();
      $('.form-group-form').fadeIn(3000);
    }

    // SECTION SKILLS - SLIDE IN
    if(this.hash == '#skills') {
      $('.skills-description, .images-skills').hide();
      $('.skills-description, .images-skills').fadeIn(2000);
    }

  });


// SECTION SKILLS - TABS - ICONS
  $('.skills-thumb').hide();
  $('.images-skills div').on('mouseenter', (event) => {
    $('.skills-main-text').hide();
    $(event.currentTarget).closest('.images-skills div').addClass('skill-icon-active')
  }).on('mouseleave', (event) => {
    $('.skills-main-text').show();
    $(event.currentTarget).closest('.images-skills div').removeClass('skill-icon-active')
  });


// SECTION SKILLS - TABS - AFFICHAGE DESCRIPTION
  //mockup
  $('.mockup-icon').on('mouseenter', () => {
    $('.skills-mockup').show();
  }).on('mouseleave', () => {
    $('.skills-mockup').hide();
  });
  //frontend
  $('.frontend-icon').on('mouseenter', () => {
    $('.skills-frontend').show();
  }).on('mouseleave', () => {
    $('.skills-frontend').hide();
  });
  //backend
  $('.backend-icon').on('mouseenter', () => {
    $('.skills-backend').show();
  }).on('mouseleave', () => {
    $('.skills-backend').hide();
  });
}
});



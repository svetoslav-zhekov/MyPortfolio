//Animations
//Hero Section Headers Animation
function hero_headers_animate() {
    //Make Sure Welcome Header Is Hidden
    $("#hero-section-welcome").hide();

    //FadeIn And Out Hello Text
    $("#hero-section-hello").show().addClass('fadeinleft').delay(2500).queue(function() {
        $("#hero-section-hello").addClass('fadeoutright').removeClass('fadeinleft').dequeue();
    }).delay(1200).queue(function() {
        $("#hero-section-hello").hide().dequeue();
    }).delay(100).queue(function() {
        $("#hero-section-welcome").show().addClass('fadeinleft').dequeue();
    }).queue(function() {
        $("#hero-section-welcome").removeClass('fadeinleft').dequeue();
    });
}

//AboutMe Animation
function aboutme_section_animate() {
    //FadeInLeft/Right
     $("#aboutme-section-header").addClass('fadeinleft').css('visibility', 'visible').delay(1000).queue(function() {
         $("#aboutme-section-img").addClass('fadeinleft').css('visibility', 'visible').dequeue();
         $("#aboutme-section-info").addClass('fadeinleft').css('visibility', 'visible').dequeue();
     });
 }

 //MyProjects Animation
 function myprojects_section_animate() {
    //FadeInLeft/Right
     $("#myprojects-section-header").addClass('fadeinleft').css('visibility', 'visible').delay(1000).queue(function() {
         $("#projects").addClass('fadeinleft').css('visibility', 'visible').dequeue();
         $("#projects-more").addClass('fadeinleft').css('visibility', 'visible').dequeue();
     });
 }

 //MyProjects Animation
 function contactme_section_animate() {
    //FadeInLeft/Right
     $("#contactme-section-header").addClass('fadeinleft').css('visibility', 'visible').delay(1000).queue(function() {
         $("#contactme-text").addClass('fadeinleft').css('visibility', 'visible').dequeue();
         $("#contactme-socials").addClass('fadeinleft').css('visibility', 'visible').dequeue();
     });
 }
 
 //On Document Load
 $(document).ready(function() {
    hero_headers_animate();

     $(document).scroll(function() {
         //Get Height
         var viewportHeight = $(window).height();

         //Get Scroll Position
         var scrollPosition = $(this).scrollTop();
         
         if (scrollPosition >= $("#aboutme-section-header").offset().top - 500) 
         {
            aboutme_section_animate();
         }

         if (scrollPosition >= $("#myprojects-section-header").offset().top - 500)
         {
             myprojects_section_animate();
         }

         if (scrollPosition >= $("#contactme-section-header").offset().top - 500)
         {
            contactme_section_animate()
         }
     });
 });


$(document).ready(function () {
 
// Menu

// $('#slidemenu').on('show.bs.collapse','.collapse', function() {

//     $('#slidemenu').find('.sub-menu.show').collapse('hide');

// });



$('#hummenu').click(function(){

    $('#slidemenu').addClass('menu-open');

    $('.slidemenu-overlay').addClass('open');

});



$('#closemenu').click(function(){

    $('#slidemenu').removeClass('menu-open');

    $('.slidemenu-overlay').removeClass('open');

});

$('.slidemenu-overlay').click(function(){

    $('#slidemenu').removeClass('menu-open');

    $(this).removeClass('open');

});

  // banner
  var owl = $(".banner-section .owl-carousel");
  owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: false,
      dots: true,
      // dotsContainer: '#custom-owl-dots',
      animateIn: 'fadeIn', // add this
      animateOut: 'fadeOut', // and this
      //   navText: [
      //     '<img src="images/prev.svg" alt="">',
      //     '<img src="images/next.svg" alt="">'
      // ],

      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },

          1000: {
              items: 1
          },
      }
      
  });


  $("#datepicker").datepicker({
    firstDay: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd.mm.yy"
  });
  
  $(".date").mousedown(function() {
    $(".ui-datepicker").addClass("active");
  });


  var owl = $('.service-slider');
  owl.owlCarousel({
  autoPlay: 1000, // Set AutoPlay to 3 seconds
  items:7,
  nav:false,  
  margin:20,  
  dots:false,
  loop:true,
  autoplay:true,
  smartSpeed:1500,
  autoplayTimeout:3000,
  // navText : ["<img src='images/previous-arrow.svg'>","<img src='images/next-arrow.svg'>"],
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:2,
      nav:false,  
      dots:false, 
    },
    700:{
      items:4,
      nav:false,  
      dots:false, 
    },
    768:{
      items:4,
      nav:false,  
      dots:false,
    },
    1000:{
      items:6,
      nav:false,  
      dots:false, 
    },
        
    1280:{
      items:7,
      nav:false, 
    }
  }
  
});
 
  var owl = $('.doc-cara');
  owl.owlCarousel({
  autoPlay: 1000, // Set AutoPlay to 3 seconds
  items:4,
  nav:true,  
  margin:20,  
  dots:false,
  loop:true,
  autoplay:true,
  smartSpeed:1500,
  autoplayTimeout:3000,
  navText : ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:1,
    },
    700:{
      items:2,
    },
    768:{
      items:2,
    },
    1000:{
      items:3,
    },
        
    1280:{
      items:4,
    }
  }
  
});

$('.ft-reviews-cara .owl-carousel').owlCarousel({
    loop: true,
    dots:false,
    margin: 30,
    nav: true,
    navText : ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$(".accordian li h4").on("click", function() {
    var parentLi = $(this).parent();
    parentLi.siblings().removeClass("active").find(".content").slideUp();
    parentLi.toggleClass("active");
    parentLi.find(".content").stop(true, true).slideToggle();
});
 
});




        

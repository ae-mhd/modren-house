$(document).ready(function () {
  // Slider Height
  $(".owl-carousel img").height($(window).height());
  $(window).resize(function () {
    $(".owl-carousel img").height($(window).height());
  });
  // Owl Carusel
  $(".header .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    animateOut: "fadeOut",
    smartSpeed: 550,
    
  });
  $(".brands .owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    autoplay: true,
    responsive: {0: {items:2}, 760:{items:4}, 992:{items:6}},
  });

  // Dark Mode
  $(".dark .fa-adjust").on("click", function () {
    $("body").toggleClass("dark-mode");
  });
  // Side Menu Transition
  $(".menu").on("click", function () {
    $(".side-menu").addClass("menu-transition")
   
  })
  $(".side-menu .icon").on("click", function () {
    $(".side-menu").removeClass("menu-transition")
   
  })
  // Scrolling Effect
  $(window).on("scroll", function () {
    if (window.scrollY >= 150) {
      $(".nav-left").fadeOut(700);
      $(".nav-top").fadeIn(500);
    } else {
      $(".nav-left").fadeIn(500);
      $(".nav-top").fadeOut(500);
    }
  })
  const counters = document.querySelectorAll(".about .num");
  const delay = 200;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = counter.getAttribute('data-target');
      const count = parseInt(counter.innerText);
      const spead = target / delay;
      if (count < target) {
        counter.innerText =Math.floor(count + spead) 
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target
      }
       
    }
    updateCount()

  })
  // Count-Down
  
  var count = $('.countdown').html()
  $('.countdown').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(count));
  });

  
});

function birthdayCakeCandles(candles) {
  // to get the duplicate item
  const x=candles.filter((item, index) => candles.indexOf(item) !== index);
  // to filter (x) in the array then get the length
  const y = candles.filter((el) => el == x[0]);
  return y.length
}
birthdayCakeCandles([3,2,1,3])
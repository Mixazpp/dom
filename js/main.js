$(function(){
    $('.top__slider-item').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/errow-left.png" alt="222" ></button>',
		    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/errow-right.png" alt="111" ></button>',
      });
      $(".top__slider-item").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
     });



     $('.blog__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-btn-blog slick-prev-blog"><img src="img/arrow-blog-left.png" alt="222" ></button>',
		    nextArrow: '<button type="button" class="slick-btn-blog slick-next-blog"><img src="img/arrow-blog-right.png" alt="111" ></button>',
        
        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
 
            }
          },
        
       
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
 
            }
          },
        ],

        });
      $(".blog__slider").on('afterChange', function(event, slick, currentSlide){
        $("#cpi").text(currentSlide + 1);
     });





     $('.article__slider-item').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-btn-article slick-prev-article"><img src="img/errow-left.png" alt="222" ></button>',
		    nextArrow: '<button type="button" class="slick-btn-article slick-next-article"><img src="img/errow-right.png" alt="111" ></button>',
      });
      $(".article__slider-item").on('afterChange', function(event, slick, currentSlide){
        $("#cpa").text(currentSlide + 1);
     });


     $('.menu__mobile-btn').on('click', function(){
      $('.mobile-menu').removeClass('mobile-menu--close');
      });
      $('.mobile-menu__btnclose').on('click', function(){
      $('.mobile-menu').addClass('mobile-menu--close');
      });










    $('.company__popup').magnificPopup({
        disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
    });

});
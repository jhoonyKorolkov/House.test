/*******************slider**************************** */

$(document).ready(function () {

  $('.slider').slick({
    prevArrow: ".page__header-slider--left",
    nextArrow: ".page__header-slider--right",
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear'
    
  });
});

$(document).ready(function () {
  $('.slider__build').slick({
    prevArrow: ".slider__build-control--left",
    nextArrow: ".slider__build-control--right",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  });

});

$(document).ready(function () {

  $('.plan__slider').slick({
    prevArrow: ".plan__control-left",
    nextArrow: ".plan__control-right",
    dots: false,
    infinite: true,
    speed: 500,
    infinite: false,
    cssEase: 'linear'
  });
});

/****************map********************/
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [53.33988707111208, 83.79475099999996],
    zoom: 16
  });

  myMap.behaviors.disable([
    'drag', 'scrollZoom',
  ]);



  myMap.controls
    .remove('searchControl')
    .remove('geolocationControl')
    .remove('routeButtonControl')
    .remove('trafficControl')
    .remove('typeSelector')
    .remove('fullscreenControl')
    .remove('rulerControl')
    .remove('zoomControl');

  myMap.controls.add('zoomControl', {
    size: 'small'
  });

  var myPlacemark = new ymaps.Placemark([53.33988707111208, 83.79475099999996], {
    hintContent: 'Содержимое всплывающей подсказки',
    balloonContent: 'Содержимое балуна'
  });

  var myPlacemark = new ymaps.Placemark([53.33988707111208, 83.79475099999996], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/house.svg',
    iconImageSize: [47, 59],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}

/************************tabs******************************/
$(".documents__nav-link").click(function () {

  $(".documents__nav-link").removeClass("active__documents-link");
  $(this).addClass("active__documents-link");

  $(".documents__archive-list").hide();
  t_content = $(this).attr("href");
  $(t_content).show();

  return false
})
$(".documents__nav-link:first").trigger("click");



$(document).ready(function () {
  $('.button__popup').magnificPopup({
    type: 'inline',
		preloader: false,
		focus: '#login',
		modal: true
  });
  $(document).on('click', '.close__popup', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

});

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function() {
	$('.discription__photo-link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});


$(document).ready(function() {
	$('.slider__build').magnificPopup({
		delegate: '.slider__build-link:not(.slick-cloned)',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
});

$(document).ready(function() {
	$('.plan__slider').magnificPopup({
		delegate: '.plan__slider-link',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
});

$(document).ready(function() {

	$('.apartment__size-link').magnificPopup({
		type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
  });
});
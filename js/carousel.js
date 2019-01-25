///////////// CAROUSEL //////////////
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    navigation:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        }
    }
})
let owl = $('.owl-carousel');
owl.owlCarousel();
$('#prev').on('click', function() {
	owl.trigger('prev.owl.carousel');
})
$('#next').on('click', function() {
	owl.trigger('next.owl.carousel');
})
///////////// //////// //////////////
window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 50,
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
}
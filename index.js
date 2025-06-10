$(document).ready(() => {

   $('.header-li.one').on('click', () => {
  $('.food-menu').fadeToggle(330).toggleClass('hide');
});

})

$(document).ready(() => {

   $('.burger').on('click', () => {
  $('.burger-container').slideToggle(350).toggleClass('hide');
  
});

})


$(document).ready(() => {
  $('.burger-li.one').on('click', () => {
    $('.food-menu').fadeToggle(330).toggleClass('hide')
  })
});





$(document).ready(function() {
    $(".combo-box").each(function() {
      let box = $(this);
      let counter = box.find(".counter");
      let count = parseInt(counter.text());
      const limit = 10;

      box.find(".add-item").click(function() {
        if (count < limit) {
        count++;
        counter.text(count);
        }
      });
  
      box.find(".subtract-item").click(function() {
        if (count > 0) {
          count--;
          counter.text(count);}
      });
    });
  });


  $(document).ready(function() {
    let current = 0;
    const $slides = $('.slide');
    const allSlides = $slides.length;

    function showSlide(index) {
       $slides.removeClass('active');
       $slides.eq(index).addClass('active');
    }

    $('.java-arrow-left').click(function () {
      current = (current - 1 + allSlides) % allSlides;
      showSlide(current);
    });

    $('.java-arrow-right').click(function () {
      current = (current + 1) % allSlides;
      showSlide(current);
    });

  });
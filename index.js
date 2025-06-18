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


 // Select the slider track (the container holding all the slides)
const track = document.querySelector('.slider-track');

// Convert the children of the track into an array of slide elements
const slides = Array.from(track.children);

// Select the previous and next navigation buttons
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

// Track the index of the currently visible slide
let current = 0;

/**
 * Updates the slider's position by shifting the track left
 * Each slide is 100% width, so we multiply the index by 100
 */
function updateSlide() {
  track.style.transform = `translateX(-${current * 100}%)`;
}

// When the "previous" button is clicked
prevBtn.addEventListener('click', () => {
  // Decrement the slide index. If we go below 0, loop to the last slide.
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
});

// When the "next" button is clicked
nextBtn.addEventListener('click', () => {
  // Increment the slide index. If we go past the last slide, loop back to 0.
  current = (current + 1) % slides.length;
  updateSlide();
});
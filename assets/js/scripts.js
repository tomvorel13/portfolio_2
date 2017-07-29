$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.selected');
      var nextImg = currentImg.next();

      if(nextImg.length){
          currentImg.removeClass('selected').css('z-index', -10);
          nextImg.addClass('selected').css('z-index', 10);
      }
    });

      $(".prev").on("click", function() {
        var currentImg = $(".selected");
        var prevImg = currentImg.prev();

        if (prevImg.length) {
          currentImg.removeClass("selected").css("z-index", -10);
          prevImg.addClass("selected").css("z-index", 10);
        }
      });
});
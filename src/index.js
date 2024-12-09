$(function () {
  //add your images here
  var image_to_id = {
    // "#pt-1-6": "9.jpg",
    // "#pt-2-6": "image2.jpg",
    // "#pt-3-6": "image3.jpg",
    // "#pt-4-6": "image4.jpg",
    // "#pt-5-6": "image5.jpg",
    // "#pt-6-6": "image6.jpg"
  };

  function hoverIT(id, imageURL) {
    $(id).on({
      mouseover: function () {
        $(".pt-img").attr({
          src: imageURL,
          height: "650px",
          width: "350px", // i have added width too in image
        });
      },
      mouseleave: function () {
        $(".pt-img").attr("src", "sectwo.jpeg");
      },
    });
  }

  //yeh basically for loop hai jo har ek key dict ki value hover it mein as id anad imageURL dalti hai

  //like dic se pt-1-6 liya and give hoverIT as id and its value as url

  $.each(image_to_id, function (id, imageURL) {
    hoverIT(id, imageURL);
  });
});

//mai transition nahi daal pa rha , if you any idea let me know
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").css("background-color", "white");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header").css("background-color", "transparent");
    }
  });
});
$(document).ready(function () {
  const quoteWords = ["Choose", "us,", "you'll", "love", "the", "experience!"];
  let index = 0;
  let hasStarted = false;

  function displayNextWord() {
    if (index < quoteWords.length) {
      let wordElement = $(
        "<span class='word'>" + quoteWords[index] + "&nbsp</span>"
      );

      $("#quote").append(wordElement);

      index++;
      setTimeout(displayNextWord, 800);
    }
  }

  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > 50 && !hasStarted) {
      hasStarted = true;
      index = 0;
      $("#quote").empty();
      displayNextWord();
    }

    if (scrollTop === 0) {
      hasStarted = false;
    }
  });
});

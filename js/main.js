(function($) {
  ("use strict");

  /*------------------------------------------------------------------
[Table of contents]


-------------------------------------------------------------------*/

  /*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };

  $(function () {

/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $("#sticky-menu").addClass("sticky-menu");
      } else {
        $("#sticky-menu").removeClass("sticky-menu");
      }
    });

/*--------------------------------------------------------------
OFF CANVAS JS INIT
--------------------------------------------------------------*/

    $(".menu-bar").on("click", function () {
      $(".offcanves-menu, .offcanvas-overlay").addClass("active");
    });
    $(".close, .offcanvas-overlay").on("click", function () {
      $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
    });

    // progress top js
   $(window).on("scroll", function () {
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
       $(".scroll-to-target").removeClass("open");
     } else {
       $(".scroll-to-target").addClass("open");
     }
   });

   /*===========================================
	=           Scroll Up  	         =
=============================================*/
   if ($(".scroll-to-target").length) {
     $(".scroll-to-target").on("click", function () {
       var target = $(this).attr("data-target");
       // animate
       $("html, body").animate(
         {
           scrollTop: $(target).offset().top,
         },
         0
       );
     });
   }
    

 

  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {

        /*--------------------------------------------------------------
  AWURA PRELOADER JS INIT
  --------------------------------------------------------------*/
    const preloader = document.getElementById("awura-preloader");
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      document.body.style.overflow = "auto";
    }, 600);

    
  }); // End window LODE

  new WOW().init();


})(jQuery);



 /*--------------------------------------------------------------
AWURA ACCORDION JS INIT
------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", () => {
    const accordionGroups = document.querySelectorAll(
      ".awura-accordion-wrapper"
    );

    accordionGroups.forEach((group) => {
      const items = group.querySelectorAll(".awura-accordion-item");

      items.forEach((item) => {
        const header = item.querySelector(".awura-accordion-header");
        const content = item.querySelector(".awura-accordion-content");

        if (item.classList.contains("active")) {
          content.style.height = content.scrollHeight + "px";
        }

        header.addEventListener("click", () => {
          const openItem = group.querySelector(".awura-accordion-item.active");
          if (openItem && openItem !== item) {
            openItem.classList.remove("active");
            openItem.querySelector(".awura-accordion-content").style.height =
              "0px";
          }

          item.classList.toggle("active");
          if (item.classList.contains("active")) {
            content.style.height = content.scrollHeight + "px";
          } else {
            content.style.height = "0px";
          }
        });
      });
    });
  });





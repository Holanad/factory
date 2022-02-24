/*AOS.init({
  offset: -1600,
  duration: 1000,
  delay: 150,
  wait:0,
  once: true,
  
});*/
// Aos init
AOS.init({
  duration: 1000,
  delay: 150,
  wait:0,
  once: true,    
});

// Aos refresh
setTimeout(function() {
  AOS.refresh();
}, 100);
// jQuery function
$(document).ready(function() {

    $('body').on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        if(!$(this).attr('href')||!$(this).attr('href').includes('#'))return

        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top 
        $('body,html').animate({ scrollTop: top - 100 }, 1000);


        console.log(id)
        if(id=="#volume-weight" && !$(id).hasClass('--active')){
            $(id).find('.btn.toggle').trigger('click')
        }
    });

    $('.story-video').click(function(){
        var videoURL = $('.story-video iframe').attr('src'),
        dataplay = $('.story-video iframe').attr('data-play');
        if(dataplay == 0 ){
            $('.story-video iframe').attr('src',videoURL+'?autoplay=1');
            $('.story-video iframe').attr('data-play',1);
            $('.story-video-poster').addClass('active');
         }
         else{
            var videoURL = $('.story-video iframe').attr('src');
            videoURL = videoURL.replace("?autoplay=1", "");
            $('.story-video iframe').prop('src','');
            $('.story-video iframe').prop('src',videoURL);
    
            $('.story-video iframe').attr('data-play',0);
            $('.story-video-poster').removeClass('active');
         }
    
    });
    (function slickMain() {
        if ($('.intro-slider').length) {
          $('.intro-slider').slick({
               // speed: 500,
                infinite: true,
                slidesToShow: 1,
                arrows: true,
                loop: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 6000,
                cssEase: 'linear',
                prevArrow: '<button class="slider-arrow right-arrow slick-prev" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.63041 16.202L15.4668 28.0384L14.1516 29.3535L1.00018 16.2021L14.1517 3.05049L15.4668 4.36564L3.63041 16.202Z" fill="#006192"/></svg></button>',
                nextArrow: '<button class="slider-arrow left-arrow slick-next" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8364 16.202L1.00004 28.0384L2.31518 29.3535L15.4666 16.2021L2.31514 3.05049L0.999998 4.36564L12.8364 16.202Z" fill="#006192"/></svg></button>',
          })
          $('.intro-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            setTimeout(function() {
                //your code to be executed after 1 second
                console.dir(nextSlide)
            }, 2000);
          });
        }        
    }());
    (function slickProgram() {
        if ($('.s-program-slider').length) {
          $('.s-program-slider').slick({
                infinite: false,
                slidesToShow: 1,
                arrows: true,
                loop: false,
                fade: true,
                cssEase: 'linear',
                prevArrow: '<button class="slider-arrow right-arrow slick-prev" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.63041 16.202L15.4668 28.0384L14.1516 29.3535L1.00018 16.2021L14.1517 3.05049L15.4668 4.36564L3.63041 16.202Z" fill="#006192"/></svg></button>',
                nextArrow: '<button class="slider-arrow left-arrow slick-next" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8364 16.202L1.00004 28.0384L2.31518 29.3535L15.4666 16.2021L2.31514 3.05049L0.999998 4.36564L12.8364 16.202Z" fill="#006192"/></svg></button>',
          })
        }
    }());
    (function slickProductOne() {
      if ($('.product-main-slider').length) {
        $('.product-main-slider').slick({
              infinite: true,
              slidesToShow: 1,
              arrows: true,
              loop: true,
              fade: true,
              cssEase: 'linear',
              prevArrow: $('.slick-prev'),
              nextArrow: $('.slick-next'),
        })
      }
    }());
    (function slickProductTwo() {
      if ($('.product-decisions-slider').length) {
        $('.product-decisions-slider').slick({
              infinite: true,
              slidesToShow: 1,
              arrows: true,
              loop: true,
              fade: true,
              cssEase: 'linear',
              prevArrow: '<button class="slider-arrow right-arrow slick-prev" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.63041 16.202L15.4668 28.0384L14.1516 29.3535L1.00018 16.2021L14.1517 3.05049L15.4668 4.36564L3.63041 16.202Z" fill="#006192"/></svg></button>',
              nextArrow: '<button class="slider-arrow left-arrow slick-next" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8364 16.202L1.00004 28.0384L2.31518 29.3535L15.4666 16.2021L2.31514 3.05049L0.999998 4.36564L12.8364 16.202Z" fill="#006192"/></svg></button>',
        })
      }
    }());
    (function slickProgram() {
      if ($('.prod-slider').length) {
        $('.prod-slider').slick({
              infinite: true,
              slidesToShow: 1,
              arrows: true,
              loop: true,
              variableWidth: true,
              prevArrow: '<button class="slider-arrow right-arrow slick-prev" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.63041 16.202L15.4668 28.0384L14.1516 29.3535L1.00018 16.2021L14.1517 3.05049L15.4668 4.36564L3.63041 16.202Z" fill="#006192"/></svg></button>',
              nextArrow: '<button class="slider-arrow left-arrow slick-next" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8364 16.202L1.00004 28.0384L2.31518 29.3535L15.4666 16.2021L2.31514 3.05049L0.999998 4.36564L12.8364 16.202Z" fill="#006192"/></svg></button>',
        })
      }
    }());
    (function slickTestimonials() {
      if ($('.slider-s-list').length) {
        $('.slider-s-list').slick({
              infinite: true,
              slidesToShow: 1,
              arrows: true,
              loop: true,
              variableWidth: true,
              prevArrow: '<button class="slider-arrow right-arrow slick-prev" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.63041 16.202L15.4668 28.0384L14.1516 29.3535L1.00018 16.2021L14.1517 3.05049L15.4668 4.36564L3.63041 16.202Z" fill="#006192"/></svg></button>',
              nextArrow: '<button class="slider-arrow left-arrow slick-next" aria-label="Next"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8364 16.202L1.00004 28.0384L2.31518 29.3535L15.4666 16.2021L2.31514 3.05049L0.999998 4.36564L12.8364 16.202Z" fill="#006192"/></svg></button>',
        })
      }
    }());
    (function formValidateQuestion() {
      $('.question-form').validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              email: {
                  required: true,
                  minlength: 5
              },
              tel: {
                  required: true,
                  minlength: 5
              }
          },
          messages: {
            name: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 2 символов"
            },
            email: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
            },
            tel: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            }
          }
      });
    }());
    (function formValidateFooter() {
      $('.footer-social-form').validate({
          rules: {
              email: {
                  required: true,
                  minlength: 5
              },
          },
          messages: {
            email: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
            },
          }
      });
    }());
    (function formValidatePress() {
      $('.s-contact-form').validate({
          rules: {
              email: {
                  required: true,
                  minlength: 5
              },
          },
          messages: {
            email: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
            },
          }
      });
    }());
    (function formValidateRegEvents() {
      $('.r-events-form').validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              org: {
                required: true,
                minlength: 2
              },
              email: {
                  required: true,
                  minlength: 5
              },
              tel: {
                  required: true,
                  minlength: 5
              }
          },
          messages: {
            name: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 2 символов"
            },
            org: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            email: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
            },
            tel: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            }
          }
      });
    }());
    (function formValidateVacancyPage() {
      $('.vacancy-section-form').validate({
          rules: {
              position: {
                  required: true,
                  minlength: 2
              },
              name: {
                required: true,
                minlength: 2
              },
              birhday: {
                required: true,
                minlength: 2
              },
              city: {
                required: true,
                minlength: 2
              },
              email: {
                  required: true,
                  minlength: 5
              },
              tel: {
                  required: true,
                  minlength: 5
              }
          },
          messages: {
            position: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 2 символов"
            },
            name: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            birhday: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            city: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            email: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
            },
            tel: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            }
          }
      });
    }());
    (function formValidatePopup() {
      $('.popup-application-form').validate({
          rules: {
              org: {
                  required: true,
                  minlength: 2
              },
              name: {
                required: true,
                minlength: 2
              },
              position: {
                required: true,
                minlength: 2
              },
              theme: {
                required: true,
                minlength: 2
              },
              email: {
                  required: true,
                  minlength: 5
              },
              tel: {
                  required: true,
                  minlength: 5
              }
          },
          messages: {
            org: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 2 символов"
            },
            name: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            position: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            theme: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            email: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
            },
            tel: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            }
          }
      });
    }());
    (function formCheckPopup() {
      $('.check-list-form').validate({
          rules: {
              org: {
                  required: true,
                  minlength: 2
              },
              name: {
                required: true,
                minlength: 2
              },
              email: {
                  required: true,
                  minlength: 5
              },
              tel: {
                  required: true,
                  minlength: 5
              }
          },
          messages: {
            org: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 2 символов"
            },
            name: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
            },
            email: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
            },
            tel: {
                required: "Заполните поле",
                minlength: "Должно быть не менее: 5 символов"
            }
          }
      });
    }());
    (function intlTelInput () {
        if ($(".input-tel").length) {
            let telInput = document.querySelector(".input-tel");
        
            window.intlTelInput(telInput, {
                autoHideDialCode: false,
                autoPlaceholder: "aggressive",
                placeholderNumberType: "MOBILE",
                allowExtensions: false,
                allowPlus: true,
                autoFormat: true,
                onlyCountries: [
                    "al",
                    "ad",
                    "at",
                    "by",
                    "be",
                    "ba",
                    "bg",
                    "hr",
                    "cz",
                    "dk",
                    "ee",
                    "fo",
                    "fi",
                    "fr",
                    "de",
                    "gi",
                    "gr",
                    "va",
                    "hu",
                    "is",
                    "ie",
                    "it",
                    "lv",
                    "li",
                    "lt",
                    "lu",
                    "mk",
                    "mt",
                    "md",
                    "mc",
                    "me",
                    "nl",
                    "no",
                    "pl",
                    "pt",
                    "ro",
                    "ru",
                    "sm",
                    "rs",
                    "sk",
                    "si",
                    "es",
                    "se",
                    "ch",
                    "ua",
                    "gb",
                ],
                preferredCountries: ["ru", "ua", "by"],
                nationalMode: false,
                utilsScript: "bower_components/intl-tel-input/build/js/utils.js",
            });
        }
    }());
    (function intlTelInputPopup () {
      if ($(".input-tel__popup").length) {
          let telInput = document.querySelector(".input-tel__popup");
      
          window.intlTelInput(telInput, {
              autoHideDialCode: false,
              autoPlaceholder: "aggressive",
              placeholderNumberType: "MOBILE",
              allowExtensions: false,
              allowPlus: true,
              autoFormat: true,
              onlyCountries: [
                  "al",
                  "ad",
                  "at",
                  "by",
                  "be",
                  "ba",
                  "bg",
                  "hr",
                  "cz",
                  "dk",
                  "ee",
                  "fo",
                  "fi",
                  "fr",
                  "de",
                  "gi",
                  "gr",
                  "va",
                  "hu",
                  "is",
                  "ie",
                  "it",
                  "lv",
                  "li",
                  "lt",
                  "lu",
                  "mk",
                  "mt",
                  "md",
                  "mc",
                  "me",
                  "nl",
                  "no",
                  "pl",
                  "pt",
                  "ro",
                  "ru",
                  "sm",
                  "rs",
                  "sk",
                  "si",
                  "es",
                  "se",
                  "ch",
                  "ua",
                  "gb",
              ],
              preferredCountries: ["ru", "ua", "by"],
              nationalMode: false,
              utilsScript: "bower_components/intl-tel-input/build/js/utils.js",
          });
      }
  }());
  (function intlTelChecklistPopup () {
    if ($(".input-tel__check-list").length) {
        let telInput = document.querySelector(".input-tel__check-list");
    
        window.intlTelInput(telInput, {
            autoHideDialCode: false,
            autoPlaceholder: "aggressive",
            placeholderNumberType: "MOBILE",
            allowExtensions: false,
            allowPlus: true,
            autoFormat: true,
            onlyCountries: [
                "al",
                "ad",
                "at",
                "by",
                "be",
                "ba",
                "bg",
                "hr",
                "cz",
                "dk",
                "ee",
                "fo",
                "fi",
                "fr",
                "de",
                "gi",
                "gr",
                "va",
                "hu",
                "is",
                "ie",
                "it",
                "lv",
                "li",
                "lt",
                "lu",
                "mk",
                "mt",
                "md",
                "mc",
                "me",
                "nl",
                "no",
                "pl",
                "pt",
                "ro",
                "ru",
                "sm",
                "rs",
                "sk",
                "si",
                "es",
                "se",
                "ch",
                "ua",
                "gb",
            ],
            preferredCountries: ["ru", "ua", "by"],
            nationalMode: false,
            utilsScript: "bower_components/intl-tel-input/build/js/utils.js",
        });
    }
}());
    (function tabsEvents() {
      $('.events-header__btn').click(function() {
        let id = $(this).attr('data-tab'), 
        content = $('.events-list[data-tab="'+ id +'"]');
        $('.events-header__btn').removeClass('events-header__btn_active');
        $(this).addClass('events-header__btn_active');
        $('.events-list').removeClass('events-show');
        content.addClass('events-show');
      });
    }());

    (function tabsAll() {
      $('.tabs-btn').click(function() {
        let id = $(this).attr('data-tab'), 
        content = $('.tabs-block[data-tab="'+ id +'"]');
        $('.tabs-btn').removeClass('tabs-active');
        $(this).addClass('tabs-active');
        $('.tabs-block').removeClass('tabs-show');
        content.addClass('tabs-show');
      });
    }());
    // ЗАКРЫТИЕ МОДАЛКИ
    (function closeModal() {
      $('.popup-close').click(function() {
        $('html').removeClass('blocking');
        $('.duty').removeClass('open');
      });
      $(document).mouseup(function (e) {
        var container = $(".popup-application-wrapper");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').removeClass('blocking');
            $('.duty').removeClass('open');
        }
      });
    }());
    //Открытие модалки
    (function modalOpen() {       
      $('.modal-open').click(function (e) {
        e.preventDefault();
        $('.popup-one').addClass('open');
        $('html').addClass('blocking');
      });
    }());
        //Открытие модалки
        (function modalOpen() {       
          $('.check-modal').click(function (e) {
            e.preventDefault();
            $('.check-list-popup').addClass('open');
            $('html').addClass('blocking');
          });
        }());
    // js sticky
    (function sticky() {
      if ($('.js-sticky-widget').length) {
          let stickyEl = $('.js-sticky-widget').sticksy({ 
              topSpacing: 20, 
              listen: true 
          });
      };
    }());
    //Стрелка наверх
    (function scrollUp () {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
          $('.arrow-up').addClass('arrow-up__active');
        } else {
          $('.arrow-up').removeClass('arrow-up__active');
        }
      });

      $('.arrow-up').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, 1500);
      });
    }());
    //Бургер меню
    (function burgerActive () {
      $('.header-burger').on('click', function() {
        $('.header-burger').toggleClass('header-burger-active');
        $('.header').toggleClass('m-header-active');
        $('.header-top').toggleClass('m-header-top-active');
        $('.header-bottom-nav').toggleClass('header-bottom-nav-active');
        $('.header-bottom__btn').toggleClass('header-bottom__active');
       // $('html').toggleClass('hidden');
       
      })
    }());
    (function adaptiveSticksy () {
      if(window.innerWidth < 992){
        $('.about-img__img').first().remove();
        $('.about-img__img').removeClass('js-sticky-widget');
      }
    }());
    (function adaptiveSticksyProd () {
      if(window.innerWidth < 992){
        $('.product-info__img').first().remove();
        $('.product-info__img').removeClass('js-sticky-widget');
      }
    }());
    (function accordionImage() {
      $(".photos-btn").click(function(e){
        $(".photos-item:hidden").slice(0,6).fadeIn();
        if ($(".photos-item:hidden").length < 1) $(this).fadeOut();
      })
    }());
    (function selectNews () {
      var index = $('#tabs a[href="#simple-tab-2"]').parent().index();
      $('.news-header-tabs').tabs('select', index);
    })
});

var rellax = new Rellax('.rellax');



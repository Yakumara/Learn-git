$(function () {
    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    Data = new Date();
    Data = new Date(Data.getTime() + 31 * 24 * 60 * 60 * 1000);
    Year = Data.getFullYear();
    Month = Data.getMonth();
    Day = Data.getDate();
    // Преобразуем месяца
    switch (Month) {
        case 0:
            fMonth = "января";
            break;
        case 1:
            fMonth = "февраля";
            break;
        case 2:
            fMonth = "марта";
            break;
        case 3:
            fMonth = "апреля";
            break;
        case 4:
            fMonth = "мая";
            break;
        case 5:
            fMonth = "июня";
            break;
        case 6:
            fMonth = "июля";
            break;
        case 7:
            fMonth = "августа";
            break;
        case 8:
            fMonth = "сентября";
            break;
        case 9:
            fMonth = "октября";
            break;
        case 10:
            fMonth = "ноября";
            break;
        case 11:
            fMonth = "декабря";
            break;
    }
    // Вывод
    $('.m1-date').html(" " + Day + "&nbsp;" + fMonth + "&nbsp;" + Year + "&nbsp;г.");
    // выводит в тег m1-date 
    $('.rev-slider').slick({
        infinite: false,
        autoplay: false,
        dots: false,
        arrows: true,
        fade: false,
        speed: 300,
        slidesToShow: 3,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
        responsive: [
            {
                breakpoint: 959,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
});


